FROM python:3.10.6
LABEL maintainer = "diotmar22"
WORKDIR /usr/src/app
COPY subscriber.py /usr/src/app
COPY requirements.txt /usr/src/app
RUN pip3 install -r requirements.txt
CMD ["python3","subscriber.py"]