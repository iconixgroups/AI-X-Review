```python
import scrapy
from scrapy.crawler import CrawlerProcess
from scrapy.spiders import CrawlSpider, Rule
from scrapy.linkextractors import LinkExtractor

class AiProductSpider(CrawlSpider):
    name = 'ai_product_spider'
    allowed_domains = ['example.com']  # replace with actual domains
    start_urls = ['http://www.example.com']  # replace with actual start urls

    rules = (
        Rule(LinkExtractor(allow=()), callback='parse_item', follow=True),
    )

    def parse_item(self, response):
        item = {}
        item['url'] = response.url
        item['title'] = response.css('title::text').get()
        # Add more fields to extract as per the requirements
        return item

def crawl_websites():
    process = CrawlerProcess({
        'USER_AGENT': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)'
    })

    process.crawl(AiProductSpider)
    process.start()

if __name__ == "__main__":
    crawl_websites()
```