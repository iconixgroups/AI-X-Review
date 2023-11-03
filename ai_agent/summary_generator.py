import openai

OPENAI_API_KEY = "your-api-key"
openai.api_key = OPENAI_API_KEY

OPENAI_ENGINE = 'text-davinci-003'
OPENAI_TEMPERATURE = 0.3
OPENAI_MAX_TOKENS = 100


def summarize_product(product_details):
    prompt = f"{product_details['name']} is an AI product that "

    if "description" in product_details:
        prompt += f"{product_details['description']} "

        prompt += (
            "It has the following key features: "
            + ", ".join(product_details["features"])
            + ". "
        )
    
    if "use_cases" in product_details:
    =======
    # Removed duplicate code
    if "use_cases" in product_details:
        prompt += (
            "It has the following key features: "
            + ", ".join(product_details["features"])
            + ". "
        )
    =======
    if "use_cases" in product_details:
        prompt += (
            "It can be used for: " + ", ".join(product_details["use_cases"]) + ". "
        )
        prompt += (
            "It has the following key features: "
            + ", ".join(product_details["features"])
            + ". "
        )

    # Removed duplicate code
        if "features" in product_details:
    =======
    if "pricing" in product_details:
    =======
    # Removed duplicate code
    if "pricing" in product_details:
        prompt += f"The pricing details are as follows: {product_details['pricing']}."
    
    prompt += "\n\nSummarize this information."
=======
    if "integrations" in product_details:
        prompt += (
            "It integrates with: " + ", ".join(product_details["integrations"]) + ". "
        )

    if "pricing" in product_details:
        prompt += f"The pricing details are as follows: {product_details['pricing']}."
    
    prompt += "\n\nSummarize this information."
    OPENAI_MAX_TOKENS = 100
    if "pricing" in product_details:
    =======
    # Removed duplicate code
        if "features" in product_details:
    =======
    if "pricing" in product_details:
    =======
    # Removed duplicate code
    if "pricing" in product_details:
        prompt += f"The pricing details are as follows: {product_details['pricing']}."
    
    try:
        response = openai.Completion.create(
                    engine=OPENAI_ENGINE, prompt=prompt, temperature=OPENAI_TEMPERATURE, max_tokens=OPENAI_MAX_TOKENS
                )
        return response.choices[0].text.strip()
        if "features" in product_details:
        prompt += (
    =======
    except Exception as e:
        print(f"An error occurred while summarizing the product: {e}")
        return None
        if "features" in product_details:
        =======
        if "features" in product_details:
        prompt += (
            "It has the following key features: "
            + ", ".join(product_details["features"])
            + ". "
        )
        try:
        prompt += f"{product_details['description']} "
        
        if "features" in product_details:
=======
OPENAI_ENGINE = 'text-davinci-003'
OPENAI_TEMPERATURE = 0.3
OPENAI_MAX_TOKENS = 100
        prompt += f"The pricing details are as follows: {product_details['pricing']}."

    prompt += "\n\nSummarize this information."

    try:
        response = openai.Completion.create(
                    engine=OPENAI_ENGINE, prompt=prompt, temperature=OPENAI_TEMPERATURE, max_tokens=OPENAI_MAX_TOKENS
                )
        return response.choices[0].text.strip()
    except Exception as e:
        print(f"An error occurred while summarizing the product: {e}")
        return None
        prompt += f"{product_details['description']} "

    OPENAI_ENGINE = 'text-davinci-003'
    OPENAI_TEMPERATURE = 0.3
    OPENAI_MAX_TOKENS = 100
        prompt += f"The pricing details are as follows: {product_details['pricing']}."
    
    prompt += "\n\nSummarize this information."
    
    try:
        response = openai.Completion.create(
                    engine=OPENAI_ENGINE, prompt=prompt, temperature=OPENAI_TEMPERATURE, max_tokens=OPENAI_MAX_TOKENS
                )
        return response.choices[0].text.strip()
    except Exception as e:
        print(f"An error occurred while summarizing the product: {e}")
        return None
        prompt += f"{product_details['description']} "
    
    if "features" in product_details:
        prompt += (
        =======
        # Removed duplicate code
        if "features" in product_details:
        =======
        if "features" in product_details:
        prompt += (
        prompt += f"The pricing details are as follows: {product_details['pricing']}."
    
    prompt += "\n\nSummarize this information."
    
    try:
        response = openai.Completion.create(
                    engine=OPENAI_ENGINE, prompt=prompt, temperature=OPENAI_TEMPERATURE, max_tokens=OPENAI_MAX_TOKENS
                )
        return response.choices[0].text.strip()
    except Exception as e:
        print(f"An error occurred while summarizing the product: {e}")
        return None
        if "features" in product_details:
    =======
    if "features" in product_details:
        prompt += (
            "It has the following key features: "
            + ", ".join(product_details["features"])
            + ". "
        )
        prompt += f"The pricing details are as follows: {product_details['pricing']}."
    
    prompt += "\n\nSummarize this information."
    
    try:
        response = openai.Completion.create(
                    engine=OPENAI_ENGINE, prompt=prompt, temperature=OPENAI_TEMPERATURE, max_tokens=OPENAI_MAX_TOKENS
                )
        return response.choices[0].text.strip()
    except Exception as e:
        print(f"An error occurred while summarizing the product: {e}")
        return None
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
                    engine=OPENAI_ENGINE, prompt=prompt, temperature=OPENAI_TEMPERATURE, max_tokens=OPENAI_MAX_TOKENS
                )
        return response.choices[0].text.strip()
    except Exception as e:
        print(f"An error occurred while summarizing the product: {e}")
        return None
    
    response = openai.Completion.create(
            engine=OPENAI_ENGINE, prompt=prompt, temperature=OPENAI_TEMPERATURE, max_tokens=OPENAI_MAX_TOKENS
        )
    
    return response.choices[0].text.strip()
    =======
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
                    engine=OPENAI_ENGINE, prompt=prompt, temperature=OPENAI_TEMPERATURE, max_tokens=OPENAI_MAX_TOKENS
                )
        return response.choices[0].text.strip()
    except Exception as e:
        print(f"An error occurred while summarizing the product: {e}")
        return None
    
    response = openai.Completion.create(
            engine=OPENAI_ENGINE, prompt=prompt, temperature=OPENAI_TEMPERATURE, max_tokens=OPENAI_MAX_TOKENS
        )
    
    return response.choices[0].text.strip()
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
                    engine=OPENAI_ENGINE, prompt=prompt, temperature=OPENAI_TEMPERATURE, max_tokens=OPENAI_MAX_TOKENS
                )
        return response.choices[0].text.strip()
    except Exception as e:
        print(f"An error occurred while summarizing the product: {e}")
        return None

    response = openai.Completion.create(
            engine=OPENAI_ENGINE, prompt=prompt, temperature=OPENAI_TEMPERATURE, max_tokens=OPENAI_MAX_TOKENS
        )

    return response.choices[0].text.strip()
