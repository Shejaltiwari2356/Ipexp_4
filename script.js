
function validateForm(event) {
    event.preventDefault();

  
    const tagline = document.getElementById('tagline').value;
    if (tagline.length > 30) {
        alert('Tagline cannot exceed 30 characters.');
        return false;
    }

    
    const phone = document.getElementById('phone').value;
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        alert('Phone number must be exactly 10 digits.');
        return false;
    }

    processOrder();

    return true;
}
function processOrder() {
    const today = new Date();
    const receiptDate = today.toLocaleDateString() + ' ' + today.toLocaleTimeString();
  
    class Person {
        constructor(name, email, phone) {
            this.name = name;
            this.email = email;
            this.phone = phone;
        }

        printDetails() {
            return `Name: ${this.name}\nEmail: ${this.email}\nPhone: ${this.phone}`;
        }
    }

    class Student extends Person {
        constructor(name, email, phone, rollNo) {
            super(name, email, phone);
            this.rollNo = rollNo;
            if (this.rollNo <= 0) {
                throw new Error('Roll number must be greater than zero.');
            }
        }

        printDetails() {
            return super.printDetails() + `\nRoll No: ${this.rollNo}`;
        }
    }

 
    const recipientName = document.getElementById('recipientName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const rollNo = 1; 

    try {
        
        const student = new Student(recipientName, email, phone, rollNo);

        const receipt = `
            Receipt - Order Confirmation
            ----------------------------
            ${student.printDetails()}
            Tagline: ${document.getElementById('tagline').value}
            Color: ${document.getElementById('color').value}
            Size: ${document.getElementById('size').value}
            Quantity: ${document.getElementById('quantity').value}
            Delivery Date: ${document.getElementById('deliveryDate').value}
            Receipt Generated On: ${receiptDate}
        `;
        alert(receipt);
    } catch (error) {
        alert('Error: ' + error.message);
    }
}
