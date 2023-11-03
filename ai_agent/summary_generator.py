import openai

openai.api_key = 'your-api-key'

def summarize_product(product_details):
    prompt_parts = [f"{product_details['name']} is an AI product that "]
    
    if 'description' in product_details:
        prompt_parts.append(f"{product_details['description']} ")
    
    if 'features' in product_details:
        prompt_parts.append("It has the following key features: " + ', '.join(product_details['features']) + ". ")
    
    if 'use_cases' in product_details:
        prompt_parts.append("It can be used for: " + ', '.join(product_details['use_cases']) + ". ")
    
    if 'integrations' in product_details:
        prompt_parts.append("It integrates with: " + ', '.join(product_details['integrations']) + ". ")
    
    if 'pricing' in product_details:
        prompt_parts.append(f"The pricing details are as follows: {product_details['pricing']}.")
    
    prompt_parts.append("\n\nSummarize this information.")
    
    prompt = ''.join(prompt_parts)

    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=prompt,
        temperature=0.3,
        max_tokens=100
    )

    return response.choices[0].text.strip()
        prompt += f"{product_details['description']} "

    if 'features' in product_details:
        prompt += "It has the following key features: " + ', '.join(product_details['features']) + ". "

    if 'use_cases' in product_details:
        prompt += "It can be used for: " + ', '.join(product_details['use_cases']) + ". "

    if 'integrations' in product_details:
        prompt += "It integrates with: " + ', '.join(product_details['integrations']) + ". "

    if 'pricing' in product_details:
        prompt += f"The pricing details are as follows: {product_details['pricing']}."

    prompt += "\n\nSummarize this information."

    try:
        response = openai.Completion.create(
            engine=engine,
            prompt=prompt,
            temperature=temperature,
            max_tokens=max_tokens
        )
    except Exception as e:
        print(f"Error occurred while calling OpenAI API: {e}")
        return None

    return response.choices[0].text.strip()
    if not all(key in product_details for key in required_keys):
        raise ValueError('Missing required keys in product_details')
    prompt = f"{product_details['name']} is an AI product that "

    if 'description' in product_details:
        prompt += f"{product_details['description']} "

    if 'features' in product_details:
        prompt += "It has the following key features: " + ', '.join(product_details['features']) + ". "

    if 'use_cases' in product_details:
        prompt += "It can be used for: " + ', '.join(product_details['use_cases']) + ". "

    if 'integrations' in product_details:
        prompt += "It integrates with: " + ', '.join(product_details['integrations']) + ". "

    if 'pricing' in product_details:
        prompt += f"The pricing details are as follows: {product_details['pricing']}."

    prompt += "\n\nSummarize this information."

    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=prompt,
        temperature=0.3,
        max_tokens=100
    )

    return response.choices[0].text.strip()