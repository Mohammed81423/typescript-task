// Define an interface for the component props
interface UserInputComponentProps {
    onSubmit: (inputValue: string) => void;
  }
  
  // Create a class for the UserInputComponent
  class UserInputComponent {
    private inputValue: string = '';
    private onSubmitCallback: (inputValue: string) => void;
  
    constructor(props: UserInputComponentProps) {
      this.onSubmitCallback = props.onSubmit;
      this.initialize();
    }
  
    private handleInputChange(event: Event) {
      const inputElement = event.target as HTMLInputElement;
      this.inputValue = inputElement.value;
    }
  
    private handleFormSubmit(event: Event) {
      event.preventDefault();
      this.onSubmitCallback(this.inputValue);
      this.inputValue = '';
    }
  
    private initialize() {
      // Create HTML elements and attach event listeners
      const form = document.createElement('form');
      form.addEventListener('submit', (event) => this.handleFormSubmit(event));
  
      const label = document.createElement('label');
      label.textContent = 'Enter something:';
  
      const input = document.createElement('input');
      input.type = 'text';
      input.addEventListener('input', (event) => this.handleInputChange(event));
      
      const button = document.createElement('button');
      button.type = 'submit';
      button.textContent = 'Submit';
  
      // Append elements to the form
      form.appendChild(label);
      form.appendChild(input);
      form.appendChild(button);
  
      // Append the form to the body of the document
      document.body.appendChild(form);
    }
  }
  
  // Usage
  const userInput = new UserInputComponent({
    onSubmit: (inputValue) => {
      console.log(`User submitted: ${inputValue}`);
    },
  });
  