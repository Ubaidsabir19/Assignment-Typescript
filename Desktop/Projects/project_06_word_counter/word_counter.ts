class WordCounter {
    countWords(text: string): number {
      const words = text.trim().split(/\s+/);
      return words.length;
    }
  }
  
  const counter = new WordCounter();
  const text = "This is a sample text to count the number of words.";
  const wordCount = counter.countWords(text);
  console.log(`Word count: ${wordCount}`); 