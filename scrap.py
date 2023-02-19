import sys

import trafilatura
from gensim.summarization import keywords
from gensim.summarization.summarizer import summarize

input = sys.argv[1]

downloaded = trafilatura.fetch_url(input)
trafilatura.extract(downloaded)
result = trafilatura.extract(downloaded, include_comments=False, include_tables=False, no_fallback=True)

finres =summarize(result,ratio=0.5,split=True)

print(finres)

sys.stdout.flush()