class Computer {
  Type
  Processor
  Video
  Storage
  RamMemory
  SSD
  constructor(type, processor, video, storage, ramMemory, ssd) {
    this.Type = type
    this.Processor = processor
    this.Video = video
    this.Storage = storage
    this.RamMemory = ramMemory
    this.SSD = ssd
  }
  show(){
    console.log('Hello user, your computer type is '  + this.Type)
    console.log('Processor: '  + this.Processor) 
    console.log('Video: '  + this.Video)
    console.log('Storage: '  + this.Storage)
    console.log('RAM Memory: '  + this.RamMemory)
    console.log('SSD: '  + this.SSD)
  }
}

let computer = new Computer('Desktop', 'Ryzen 5', 'Dedicated', 1000, 16, true)
computer.show();