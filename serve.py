import os, functools
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

ROOT = "/Users/isamu/Documents/hunches_product/treep-site"
os.chdir(ROOT)
Handler = functools.partial(SimpleHTTPRequestHandler, directory=ROOT)
ThreadingHTTPServer(("127.0.0.1", 4399), Handler).serve_forever()
