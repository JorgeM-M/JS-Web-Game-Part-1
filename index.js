const inventory = newInventory()

function newImage(url, left, bottom) {
    let image = document.createElement("img")
    image.src = url
    image.style.position = "fixed"
    image.style.left = left + "px"
    image.style.bottom = bottom + "px"
    document.body.append(image)
    return image
}

function newItem(url, left, bottom){
    let item = newImage(url, left, bottom)
    item.addEventListener("click", function(){
        item.remove()
        let inventoryItem = document.createElement("img")
        inventoryItem.src = url
        inventory.append(inventoryItem)
    })
}

function newInventory(){
    let inventory = document.createElement('div')
    inventory.style.position = 'fixed'
    inventory.style.bottom = '0px';
    inventory.style.left = '0px'
    inventory.style.width = '100%'
    inventory.style.height = '100px'
    inventory.style.display = 'flex'
    inventory.style.flexDirection = 'row'
    inventory.style.alignItems = 'center'
    inventory.style.justifyContent = 'space-evenly'
    inventory.style.border = '2px solid black'
    inventory.style.backgroundColor = 'brown'
    document.body.append(inventory)
    return inventory
}

newImage("assets/green-character.gif", 100, 100)
newImage("assets/tree.png", 200, 300)
newImage("assets/pillar.png", 350, 100)
newImage("assets/pine-tree.png", 450, 200)
newImage("assets/crate.png", 150, 200)
newImage("assets/well.png", 500, 425)

newItem("assets/sword.png", 500, 405)
newItem("assets/shield.png", 165, 185)
newItem("assets/staff.png", 600, 100)