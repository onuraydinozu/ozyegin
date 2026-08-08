import sys
import re

with open(sys.argv[1], 'r', encoding='utf-8') as f:
    html = f.read()

# Remove script and style tags completely
html = re.sub(r'<(script|style)[^>]*>.*?</\1>', '', html, flags=re.IGNORECASE|re.DOTALL)
html = re.sub(r'<(br|p|div|tr|h[1-6])[^>]*>', '\n', html, flags=re.IGNORECASE)
text = re.sub(r'<[^>]+>', '', html)
text = re.sub(r'\n\s*\n', '\n', text)
print(text[:3000])
