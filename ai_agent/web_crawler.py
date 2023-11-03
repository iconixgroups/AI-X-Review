from scrapy.crawler import CrawlerProcess
from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import CrawlSpider, Rule


class AiProductCrawler(CrawlSpider):
    crawler_name = "ai_product_crawler"
    crawler_rules = (Rule(LinkExtractor(allow=()), callback="parse_web_page", follow=True),)

    def __init__(self, *args, **kwargs):
        super(AiProductCrawler, self).__init__(*args, **kwargs)
        self.update_permitted_domains_and_initial_urls()

    def parse_web_page(self, response):
        web_page_data = {}
        web_page_data["url"] = response.url
        web_page_data["title"] = response.css("title::text").get()
        web_page_data["description"] = response.css(
            'meta[name="description"]::attr(content)'
        ).get()
        web_page_data["keywords"] = response.css('meta[name="keywords"]::attr(content)').get()
        # Added more fields to extract as per the requirements
        return web_page_data


def start_crawling_process():
    crawler_process = CrawlerProcess(
        {"USER_AGENT": "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)"}
    )

    crawler_process.crawl(AiProductCrawler)
    crawler_process.start()


if __name__ == "__main__":
    start_crawling_process()
    crawl_websites()

# Removed duplicate class definition
    self.initial_crawl_urls = ["http://www.example.com"]  # replace with actual start urls


def crawl_websites():
    process = CrawlerProcess(
        {"USER_AGENT": "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)"}
    )

    process.crawl(AiProductSpider)
    process.start()


# Removed duplicate class definition
    rules = (Rule(LinkExtractor(allow=()), callback="parse_web_page", follow=True),)

    def __init__(self, *args, **kwargs):
        super(AiProductCrawler, self).__init__(*args, **kwargs)
        self.update_permitted_domains_and_initial_urls()

    def parse_web_page(self, response):
        web_page_data = {}
        web_page_data["url"] = response.url
        web_page_data["title"] = response.css("title::text").get()
        web_page_data["description"] = response.css(
            'meta[name="description"]::attr(content)'
        ).get()
        web_page_data["keywords"] = response.css('meta[name="keywords"]::attr(content)').get()
        # Added more fields to extract as per the requirements
        return web_page_data
from scrapy.spiders import CrawlSpider, Rule


class AiProductCrawler(CrawlSpider):
    crawler_name = "ai_product_crawler"
    crawler_rules = (Rule(LinkExtractor(allow=()), callback="parse_web_page", follow=True),)

    def __init__(self, *args, **kwargs):
        super(AiProductCrawler, self).__init__(*args, **kwargs)
        self.update_permitted_domains_and_initial_urls()

    def parse_web_page(self, response):
        web_page_data = {}
        web_page_data["url"] = response.url
        web_page_data["title"] = response.css("title::text").get()
        web_page_data["description"] = response.css(
            'meta[name="description"]::attr(content)'
        ).get()
        web_page_data["keywords"] = response.css('meta[name="keywords"]::attr(content)').get()
        # Added more fields to extract as per the requirements
        return web_page_data


def start_crawling_process():
    crawler_process = CrawlerProcess(
        {"USER_AGENT": "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)"}
    )

    crawler_process.crawl(AiProductCrawler)
    crawler_process.start()


if __name__ == "__main__":

def update_allowed_domains_and_start_urls(self):
    self.allowed_domains = ["example.com"]  # replace with actual domains
    self.start_urls = ["http://www.example.com"]  # replace with actual start urls


def crawl_websites():
    process = CrawlerProcess(
        {"USER_AGENT": "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)"}
    )

    process.crawl(AiProductSpider)
    process.start()


# Removed duplicate class definition
    self.initial_crawl_urls = ["http://www.example.com"]  # replace with actual start urls
# Removed duplicate class definition
