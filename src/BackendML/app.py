#This serves as the main file for flask backend , To run it in your system enter command "flask run" or "python app.py"

#Importing all the necessary modules (can install them directly in your system(in VScode terminal) with the command "pip install <packageName>")
import numpy as np
import pandas as pd
from flask import Flask, Response, request, json
from summarizer import Summarizer
from transformers import *
import pdfplumber
import re
#import spacy
#from sentence_transformers import SentenceTransformer
import nltk
#import en_core_web_sm
#nltk.download('stopwords')
#nltk.download('popular')


#predefining variables to store pdf content
first_page=[] 
content=" "
content_new=" "

# Load model, model config and tokenizer via Transformers(preloaded models, runs initially only when server starts)
custom_config = AutoConfig.from_pretrained('allenai/scibert_scivocab_uncased')
custom_config.output_hidden_states=True
custom_tokenizer = AutoTokenizer.from_pretrained('allenai/scibert_scivocab_uncased')
custom_model = AutoModel.from_pretrained('allenai/scibert_scivocab_uncased', config=custom_config)


TEMPLATES_AUTO_RELOAD = True #used for taking changes

#Used for taking requests from other servers(in our case Node)
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/')
def home():
    return "Model LOADED"



#def text_to_sent_list(text, nlp = spacy.load('en_core_web_sm'), embedder = SentenceTransformer('distilbert-base-nli-mean-tokens'),min_len=2):
  
    ''' Returns cleaned article sentences and BERT sentence embeddings'''
    
    #convert to list of sentences
    text = nlp(text)
    sents = list(text.sents)
    #remove short sentences by threshhold                                                                                                
    sents_clean = [sentence.text for sentence in sents if len(sentence)> min_len]
    #remove entries with empty list
    sents_clean = [sentence for sentence in sents_clean if len(sentence)!=0]
    #embed sentences (deafult uses BERT SentenceTransformer)
    sents_embedding= np.array(embedder.encode(sents_clean, convert_to_tensor=True))
    
    return sents_clean, sents_embedding


#This method gets the pdf content from frontend and prints the summary on console
@app.route('/summarise',methods=['GET','POST'])
def summarise():
    #with pdfplumber.open(r'gesture-recognition-using-a-touchless-sensor.pdf') as pdf:
        #first_page = pdf.pages[4]
        #content=first_page.extract_text()
    item=[]
    item=request.get_json()
    content=item['value']
    content = " ".join(content.replace(u"\xa0", " ").strip().split())
    content = " ".join(content.replace(u"\xad", " ").strip().split())

    #content=str(content)
    print(content)
    #print("type here: ")
    #print(type(content))

    #sents_clean, sents_embedding=text_to_sent_list(content)
    #content_new = "".join(sents_clean)
    #content_new = " ".join(content_new.replace(u"\xa0", " ").strip().split())
    #content_new = " ".join(content_new.replace(u"\xad", " ").strip().split())
    #print(content_new)

    model = Summarizer(custom_model=custom_model, custom_tokenizer=custom_tokenizer)
    result = model(content, min_length=20)
    summary = "".join(result)
    return summary #summary is a json object, so summary.data would provide the pdf summary


if __name__ == "__main__":
    app.run()
