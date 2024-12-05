import streamlit as st
from transformers import pipeline
import torch

# Select GPU if available, otherwise CPU
device = 0 if torch.cuda.is_available() else -1

# Load the model using pipeline
pipe = pipeline("sentiment-analysis", model="azizp128/prediksi-emosi-indobert")

st.markdown(
    """
    <h1 style="text-align: center; font-family: sans-serif;">
    Prediksi Emosi
    </h1>
    <hr>
    """,
    unsafe_allow_html=True
)

# Description
st.write("Emotion Predictor adalah aplikasi yang dapat memprediksi 6 jenis emosi yang muncul dalam sebuah kalimat, yaitu marah, sedih, senang, cinta, takut, dan jijik.")

# User input
user_input = st.text_input("Input:", placeholder="Masukkan teks")

# Prediction
if user_input:
    result = pipe(user_input)
    for res in result:
        st.write("Prediksi:")
        st.success(res['label'])
        st.write("Skor:")
        st.success(res['score'])
