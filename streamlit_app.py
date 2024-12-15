import streamlit as st
from transformers import pipeline
import torch

# Select GPU if available, otherwise CPU
device = 0 if torch.cuda.is_available() else -1

# Load the model using pipeline
pipe = pipeline("sentiment-analysis", model="azizp128/prediksi-emosi-indobert")

# Initialize session state for result
if "result" not in st.session_state:
    st.session_state.result = None

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
st.write("Model deep learning berbasis IndoBERT yang dapat memprediksi 6 jenis emosi yang muncul dalam sebuah kalimat, yaitu marah, sedih, senang, cinta, takut, dan jijik.")

# User input
user_input = st.text_input("Input", placeholder="Masukkan teks")

# Examples
options = ["Aku senang sekali, karena hari ini ulang tahunku.",
           "Bahagia hatiku melihat pernikahan putri sulungku yang cantik jelita.",
           "Aku tidak suka dan merasa jijik jika melihat jenis makanan seperti itu.",
           "Dasar anak sialan!! Kurang ajar!!"]
selection = st.segmented_control(
    "Examples", options
)

# Prediction
if selection:
    st.session_state.result = pipe(selection)

if user_input:
    st.session_state.result = pipe(user_input)

# Display results if available
if st.session_state.result:
    for res in st.session_state.result:
        st.write("Prediksi")
        st.success(res['label'].capitalize())
        st.write("Skor")
        st.success(round(res['score'], 4))
