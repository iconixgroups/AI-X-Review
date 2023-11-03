import openai

openai.api_key = 'your-api-key'


    if 'pricing' in product_details:
        prompt_parts.append(
            f'The pricing details are as follows: {product_details["pricing"]}'
        )
    
    prompt_parts.append('\n\nSummarize this information.')
    prompt = ''.join(prompt_parts)
    
    try:
        response = openai.Completion.create(
            engine='text-davinci-003', prompt=prompt, temperature=0.3, max_tokens=100
        )
        return response.choices[0].text.strip()
    except Exception as e:
        print(f'Error occurred while calling OpenAI API: {e}')
        return None
    if "use_cases" in product_details:
        prompt_parts.append(
            "It can be used for: " + ", ".join(product_details["use_cases"]) + "."
        )
    prompt_parts.append("\n\nSummarize this information.")
    prompt = "".join(prompt_parts)
    if "use_cases" in product_details:
        prompt_parts.append(
            "It can be used for: " + ", ".join(product_details["use_cases"]) + "."
        )
    prompt_parts.append(
        "It has the following key features: "
        + ", ".join(product_details["features"])
        + "."
    )
    prompt = "".join(prompt_parts)
    try:
        response = openai.Completion.create(
            engine="text-davinci-003", prompt=prompt, temperature=0.3, max_tokens=100
        )
        return response.choices[0].text.strip()
    except Exception as e:
        print(f"Error occurred while calling OpenAI API: {e}")
        return None
