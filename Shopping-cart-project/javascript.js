let cart = [];

function renderCart() {
    const list = document.getElementById("cart-list");
    list.innerHTML = "";
}

const items = [
    { name: "Shirts", price: 3.00 },
    { name: "Pants", price: 4.50 },
    { name: "Socks", price: 1.50 },
    { name: "Tims", price: 99.95 }
 ];
 
 console.log(items);

let isDragging= false

let initialX, initialY;

const imageElements = document.querySelectorAll("img");

// console.log('imageElement =', imageElement)

//refactor with drag event nad page x and page y

// document.querySelector();
for(let i = 1; i < imageElements.length; i++) {
    const imageElement = imageElements[i]
    imageElement.addEventListener("dragstart", function(event) {
        console.log('dragstart: event =', event)
    })

    imageElement.addEventListener("drag", function(event) {
        console.log('drag: event =', event)
    })

    imageElement.addEventListener('dragend', function(event) {
        console.log('dragend: event =', event)
        imageElement.style.top = event.pageY;
        imageElement.style.left = event.pageX;
        imageElement.style.position = 'absolute'
    })

    // imageElement.addEventListener("mousedown", (event) => {
    //     console.log('event =', event)
    //     console.log("HELLO WORLD")
    //     isDragging = true;
    //     initialX = event.clientX;
    //     initialY = event.clientY;
    //     event.preventDefault();
    // });
    
    // imageElement.addEventListener("mousemove", (event) => {
    //     if (isDragging) {
    //         console.log('x =', event.clientX, initialX)
    //         console.log('y =', event.clientY, initialY)
    //         const newX = event.clientX - initialX;
    //         const newY = event.clientY - initialY;
    //         console.log('newX =', newX)
    //         console.log('newY =', newY)
    //         imageElement.style.left = `${newX}px`;
    //         imageElement.style.top = `${newY}px`;
    //     }
    
    // });
    // imageElement.addEventListener("mouseup", () => {
    //     isDragging = false;
    // })
}



cart.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.innerText = inner.Html = `${item.name} - $${item-price}`;
    const removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove";
    removeBtn.onclick = () => {
        listItem.appendChild(removeBtn);
        list.appendChild(li);
        total += item.price;
    }
})




