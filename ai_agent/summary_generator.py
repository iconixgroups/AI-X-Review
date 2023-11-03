
def replace_quotes():
    import openai

    openai.api_key = "your-api-key"


    def summarize_product(product_details):
        prompt = f"{product_details['name']} is an AI product that "

        if "description" in product_details:
            prompt += f"{product_details['description']} "

        if "features" in product_details:
            prompt += (
                "It has the following key features: "
                + ", ".join(product_details["features"])
                + ". "
            )

        if "use_cases" in product_details:
            prompt += (
                "It can be used for: " + ", ".join(product_details["use_cases"]) + ". "
            )

        if "integrations" in product_details:
            prompt += (
                "It integrates with: " + ", ".join(product_details["integrations"]) + ". "
            )

        if "pricing" in product_details:
            prompt += f"The pricing details are as follows: {product_details['pricing']}."

        prompt += "\n\nSummarize this information."

        try:
            response = openai.Completion.create(
                engine="text-davinci-003", prompt=prompt, temperature=0.3, max_tokens=100
            )
            return response.choices[0].text.strip()
        except Exception as e:
            print(f"An error occurred while summarizing the product: {e}")
            return None
            prompt += f"{product_details['description']} "

        if "features" in product_details:
            prompt += (
                "It has the following key features: "
                + ", ".join(product_details["features"])
                + ". "
            )

        if "use_cases" in product_details:
            prompt += (
                "It can be used for: " + ", ".join(product_details["use_cases"]) + ". "
            )

        if "integrations" in product_details:
            prompt += (
                "It integrates with: " + ", ".join(product_details["integrations"]) + ". "
            )

        if "pricing" in product_details:
            prompt += f"The pricing details are as follows: {product_details['pricing']}."

        prompt += "\n\nSummarize this information."

        response = openai.Completion.create(
            engine="text-davinci-003", prompt=prompt, temperature=0.3, max_tokens=100
        )

        return response.choices[0].text.strip()

replace_quotes()
