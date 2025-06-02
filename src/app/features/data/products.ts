export interface ElectronicsProduct {
  name: string;
  price: number;
  details: string;
  relevant: string;
  specifications: Record<string, string | number>;
  category: string;
  previewImage: string;
  images: string[];
}


export const electronicsProducts: ElectronicsProduct[] = [
  {
    name: 'Smart LED TV 55-inch',
    price: 499.99,
    details: 'Ultra HD 4K Smart TV with HDR, voice control, and built-in streaming apps.',
    relevant: 'TV, Smart Display, Home Entertainment',
    category: 'TV',
    specifications: {
      resolution: '3840x2160 (4K UHD)',
      screenSize: '55-inch',
      connectivity: 'HDMI, USB, Wi-Fi, Bluetooth',
      smartFeatures: 'Netflix, YouTube, Alexa Support'
    },
    previewImage: '',
    images: []
  },
  {
    name: 'Bluetooth Soundbar Speaker',
    price: 129.99,
    details: 'Powerful 2.1 channel soundbar with wireless subwoofer and remote control.',
    relevant: 'Speaker, Bluetooth Audio, Home Theater',
    category: 'Speaker',
    specifications: {
      outputPower: '120W',
      connectivity: 'Bluetooth 5.0, AUX, HDMI ARC, Optical',
      features: 'Remote Control, Bass Boost, Wall Mountable'
    },
    previewImage: '',
    images: []
  },
  {
    name: 'Smartphone Pro Max 5G',
    price: 999.00,
    details: 'Latest generation 5G smartphone with AMOLED display and quad camera.',
    relevant: 'Phones, Mobile Devices, 5G',
    category: 'Phones',
    specifications: {
      display: '6.7-inch AMOLED, 120Hz',
      processor: 'Octa-Core 3.2GHz',
      camera: '108MP + 12MP + 12MP + 10MP',
      storage: '256GB ROM / 12GB RAM'
    },
    previewImage: '',
    images: []
  },
  {
    name: 'Gaming Laptop X15',
    price: 1499.00,
    details: 'High-performance gaming laptop with RTX graphics and SSD storage.',
    relevant: 'Computer, Gaming, Laptop',
    category: 'Computer',
    specifications: {
      cpu: 'Intel Core i7-13700H',
      gpu: 'NVIDIA RTX 4060 8GB',
      ram: '16GB DDR5',
      storage: '1TB NVMe SSD',
      screen: '15.6" FHD 144Hz'
    },
    previewImage: '',
    images: []
  },
  {
    name: '128GB USB 3.2 Flash Drive',
    price: 19.99,
    details: 'High-speed USB 3.2 flash drive with metal casing for durability.',
    relevant: 'Flash, USB Storage, Portable Drive',
    category: 'Flash',
    specifications: {
      capacity: '128GB',
      interface: 'USB 3.2 Gen 1',
      speed: 'Up to 150MB/s',
      material: 'Aluminum Alloy',
      compatibility: 'Windows, macOS, Linux'
    },
    previewImage: '',
    images: []
  },
  {
    name: 'OLED Smart TV 65-inch',
    price: 1199.00,
    details: 'Premium OLED TV with perfect blacks, Dolby Vision, and gaming mode.',
    relevant: 'TV, OLED, Smart Home',
    category: 'TV',
    specifications: {
      resolution: '4K UHD',
      screenType: 'OLED',
      refreshRate: '120Hz',
      ports: '4x HDMI, 3x USB, Ethernet, Wi-Fi'
    },
    previewImage: '',
    images: []
  },
  {
    name: 'Portable Bluetooth Speaker',
    price: 59.99,
    details: 'Compact waterproof speaker with 12-hour battery life.',
    relevant: 'Speaker, Portable Audio, Outdoor',
    category: 'Speaker',
    specifications: {
      batteryLife: '12 hours',
      waterproof: 'IPX7',
      outputPower: '20W',
      connectivity: 'Bluetooth, AUX'
    },
    previewImage: '',
    images: []
  },
  {
    name: 'Budget Android Phone',
    price: 199.00,
    details: 'Affordable smartphone with decent camera and battery life.',
    relevant: 'Phones, Android, Entry-level',
    category: 'Phones',
    specifications: {
      display: '6.3-inch IPS LCD',
      camera: '50MP + 2MP Rear, 8MP Front',
      storage: '64GB ROM / 4GB RAM',
      battery: '5000mAh'
    },
    previewImage: '',
    images: []
  },
  {
    name: 'All-in-One Desktop PC',
    price: 849.00,
    details: 'Stylish desktop with 24" display, webcam, and wireless keyboard/mouse.',
    relevant: 'Computer, Desktop, Office Use',
    category: 'Computer',
    specifications: {
      cpu: 'AMD Ryzen 5 5600U',
      ram: '16GB DDR4',
      storage: '512GB SSD',
      screen: '23.8-inch FHD',
      OS: 'Windows 11 Home'
    },
    previewImage: '',
    images: []
  },
  {
    name: '256GB Dual USB Flash Drive',
    price: 29.99,
    details: 'Dual USB-A and USB-C drive compatible with PCs and smartphones.',
    relevant: 'Flash, USB-C, Mobile Storage',
    category: 'Flash',
    specifications: {
      capacity: '256GB',
      interface: 'USB-A + USB-C',
      speed: 'Up to 200MB/s',
      feature: 'OTG Support, Plug and Play'
    },
    previewImage: '',
    images: []
  }
];
