function Node (value, next) {
    this.value = value;
    this.next = next || null;
}

function LinkedList () {
  this.AddToTail = function(val){
    var newNode = new Node(val, this.tail);

    if (this.tail)
      this.tail.next = newNode;
    else
      this.head = newNode;

    this.tail = newNode;
  };

  this.AddToHead = function(val){
    var newNode = new Node(val, this.head);

    this.head = newNode;
  }
};

var ll = new LinkedList();
ll.AddToTail(5);
ll.AddToHead(2);
