export type Coffee = {
  slug: string;
  name: string;
  region: string;
  process: string;
  flavor: string;
  shortDescription: string;
  description: string;
  tone: string;
};

export const coffees: Coffee[] = [
  {
    slug: "gayo",
    name: "Arabika Gayo",
    region: "Aceh, Sumatra",
    process: "Giling basah",
    flavor: "Cokelat · Rempah",
    shortDescription: "Rasa seimbang dengan aroma rempah yang hangat dan akhir yang bersih.",
    description: "Tumbuh di dataran tinggi Gayo yang sejuk, kopi ini dikenal dengan body yang mantap, keasaman lembut, serta karakter cokelat dan rempah. Cocok untuk dinikmati setiap pagi.",
    tone: "tone-green"
  },
  {
    slug: "toraja",
    name: "Arabika Toraja",
    region: "Tana Toraja, Sulawesi",
    process: "Semi-washed",
    flavor: "Buah · Karamel",
    shortDescription: "Kompleks dan lembut, dengan sentuhan buah matang serta karamel.",
    description: "Dari pegunungan Sulawesi, Arabika Toraja menawarkan lapisan rasa yang kompleks. Keasaman seimbang berpadu dengan nuansa buah, karamel, dan sedikit rempah di bagian akhir.",
    tone: "tone-rust"
  },
  {
    slug: "kintamani",
    name: "Arabika Kintamani",
    region: "Bali",
    process: "Proses natural",
    flavor: "Jeruk · Bunga",
    shortDescription: "Cerah dan segar dengan aroma citrus yang menyenangkan.",
    description: "Ditanam di kawasan Kintamani, Bali, kopi ini punya karakter cerah dengan keasaman segar. Aroma jeruk dan bunga menjadikannya pilihan menarik untuk seduhan manual.",
    tone: "tone-gold"
  },
  {
    slug: "flores",
    name: "Arabika Flores Bajawa",
    region: "Ngada, Flores",
    process: "Full-washed",
    flavor: "Kakao · Kacang",
    shortDescription: "Body lembut dengan rasa kakao dan kacang yang nyaman.",
    description: "Berasal dari dataran tinggi Bajawa, Flores, kopi ini dikenal dengan body lembut, aroma yang bersih, serta rasa kakao dan kacang yang bersahaja.",
    tone: "tone-blue"
  }
];