#!/bin/bash

# Create a Python virtual environment named 'mrdc_env'
python3 -m venv chatbot_api

# Activate the virtual environment
source myenv/bin/activate

# Install the required packages using pip
pip3 install -r requirements.txt

# Print the end result
echo "Virtual environment 'chatbot_api' created and packages installed."
