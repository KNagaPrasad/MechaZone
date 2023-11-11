from functools import wraps

class Decorators:
    @staticmethod
    def display_total_amount(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            result = func(*args, **kwargs)
            print(f"Total Amount: {result}")
            return result
        return wrapper

    @staticmethod
    def self_checkin_option(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            result = func(*args, **kwargs)
            result.append('Self-Checkin')
            return result
        return wrapper

    @staticmethod
    def redirect_to_delivery_page(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            result = func(*args, **kwargs)
            print("Redirecting to the delivery page...")
            return result
        return wrapper


decorators = Decorators()

@decorators.display_total_amount
def calculate_total_amount():
    return 100.0  

@decorators.self_checkin_option
def process_order():
    return ['Item 1', 'Item 2']

@decorators.redirect_to_delivery_page
def buy_now():
    return {'status': 'success'}

if __name__ == "__main__":
    calculate_total_amount()
    print(process_order())
    buy_now()
