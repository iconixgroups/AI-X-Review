import openai

openai.api_key = "your-api-key"

def generate_summary(product_details):
    summary_prompt = f"{product_details['name']} is an AI product that "

    if "description" in product_details:
        summary_prompt += f"{product_details['description']}"

            "It integrates with: " + ", ".join(product_details["integrations"]) + "."
        )

        summary_prompt += (
            "It integrates with: " + ", ".join(product_details["integrations"]) + "."
        )

    if "pricing" in product_details:
        summary_prompt += f"The pricing details are as follows: {product_details['pricing']}."
        summary_prompt += "\n\nSummarize this information."
        
        try:
            response = openai.Completion.create(
                engine="text-davinci-003", prompt=summary_prompt, temperature=0.3, max_tokens=100
            )
            return response.choices[0].text.strip()
        except Exception as e:
            print(f"An error occurred while summarizing the product: {e}")
            return None
        summary_prompt += f"{product_details['description']}"

    if "features" in product_details:
        summary_prompt += (
            "It has the following key features: "
            + ", ".join(product_details["features"])
            + "."
        )
        
        if "use_cases" in product_details:
            summary_prompt += (
                "It can be used for: " + ", ".join(product_details["use_cases"]) + "."
            )
        
    if "pricing" in product_details:
        summary_prompt += f"The pricing details are as follows: {product_details['pricing']}."
        summary_prompt += "\n\nSummarize this information."
        
        try:
            response = openai.Completion.create(
                engine="text-davinci-003", prompt=summary_prompt, temperature=0.3, max_tokens=100
            )
            return response.choices[0].text.strip()
        except Exception as e:
            print(f"An error occurred while summarizing the product: {e}")
            return None
        
        response = openai.Completion.create(
            engine="text-davinci-003", prompt=summary_prompt, temperature=0.3, max_tokens=100
        )

    return response.choices[0].text.strip()
        try:
            response = openai.Completion.create(
                engine="text-davinci-003", prompt=summary_prompt, temperature=0.3, max_tokens=100
            )
            return response.choices[0].text.strip()
        except Exception as e:
            print(f"An error occurred while summarizing the product: {e}")
            return None
        summary_prompt += f"{product_details['description']}"

    if "features" in product_details:
        
        response = openai.Completion.create(
            engine="text-davinci-003", prompt=summary_prompt, temperature=0.3, max_tokens=100
        )

    return response.choices[0].text.strip()
