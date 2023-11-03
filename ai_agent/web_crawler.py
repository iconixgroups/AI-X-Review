from scrapy.crawler import CrawlerProcess
from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import CrawlSpider, Rule


class AiProductSpider(CrawlSpider):
    name = "ai_product_spider"
    update_allowed_domains_and_start_urls()  # replace with actual start urls

    rules = (Rule(LinkExtractor(allow=()), callback="parse_item", follow=True),)

    def parse_item(self, response):
        item = {}
        item["url"] = response.url
        item["title"] = response.css("title::text").get()
        item["description"] = response.css(
            'meta[name="description"]::attr(content)'
        ).get()
        item["keywords"] = response.css('meta[name="keywords"]::attr(content)').get()
        # Added more fields to extract as per the requirements
        return item

def update_allowed_domains_and_start_urls():
    allowed_domains = ["example.com"]  # replace with actual domains
    start_urls = ["http://www.example.com"]  # replace with actual start urls


def crawl_websites():
    process = CrawlerProcess(
        {"USER_AGENT": "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)"}
    )

    process.crawl(AiProductSpider)
    process.start()


if __name__ == "__main__":
    crawl_websites()

# Removed duplicate class definition
