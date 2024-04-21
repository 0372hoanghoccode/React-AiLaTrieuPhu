const data = [
  {
    id: 1,
    question: "Quốc khánh của Việt Nam là ngày?",
    answers: [
      {
        text: "2/9",
        correct: true,
      },
      {
        text: "10/10",
        correct: false,
      },
      {
        text: "30/4",
        correct: false,
      },
      {
        text: "1/5",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: "Trái đất quay 1 vòng quanh mặt trời trong khoảng bao lâu?",
    answers: [
      {
        text: "365 ngày",
        correct: true,
      },
      {
        text: "7 ngày",
        correct: false,
      },
      {
        text: "1 ngày",
        correct: false,
      },
      {
        text: "30 ngày",
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question: "Hòn đảo nào là lớn nhất thế giới?",
    answers: [
      {
        text: "Madagascar",
        correct: false,
      },
      {
        text: "Baffin",
        correct: false,
      },
      {
        text: "New Guinea",
        correct: false,
      },
      {
        text: "Greenland",
        correct: true,
      },
    ],
  },
  {
    id: 4,
    question: "Bức tranh 'Mona Lisa' của Leonardo da Vinci được trưng bày ở đâu?",
    answers: [
      {
        text: "Viện bảo tàng Louvre, Pháp",
        correct: true,
      },
      {
        text: "Viện bảo tàng Prado, Tây Ban Nha",
        correct: false,
      },
      {
        text: "Viện bảo tàng Uffizi, Ý",
        correct: false,
      },
      {
        text: "Viện bảo tàng Hermitage, Nga",
        correct: false,
      },
    ],
  },
  {
    id: 5,
    question: "Ai là tác giả của cuốn sách “Nhà Giả Kim”?",
    answers: [
      {
        text: "Haruki Murakami",
        correct: false,
      },
      {
        text: "Gabriel Garcia Marquez",
        correct: false,
      },
      {
        text: "Paulo Coelho",
        correct: true,
      },
      {
        text: "Dan Brown",
        correct: false,
      },
    ],
  },
  {
    id: 6,
    question: "Ai là người đã phát minh ra máy tính?",
    answers: [
      {
        text: "Charles Babbage",
        correct: true,
      },
      {
        text: "Alan Turing",
        correct: false,
      },
      {
        text: "John von Neumann",
        correct: false,
      },
      {
        text: "Bill Gates",
        correct: false,
      },
    ],
  },
  {
    id: 7,
    question: "Thành phố nào là thủ đô của Canada?",
    answers: [
      {
        text: "Toronto",
        correct: false,
      },
      {
        text: "Vancouver",
        correct: false,
      },
      {
        text: "Montreal",
        correct: false,
      },
      {
        text: "Ottawa",
        correct: true,
      },
    ],
  },
  {
    id: 8,
    question: "Cầu nào là biểu tượng của thành phố Sydney, Úc?",
    answers: [
      {
        text: "Cầu Golden Gate",
        correct: false,
      },
      {
        text: "Cầu Tower",
        correct: false,
      },
      {
        text: "Cầu Harbour",
        correct: true,
      },
      {
        text: "Cầu Rialto",
        correct: false,
      },
    ],
  },
  {
    id: 9,
    question: "Ai là tác giả của tác phẩm 'Tội và Hình Phạt'?",
    answers: [
      {
        text: "Fyodor Dostoevsky",
        correct: true,
      },
      {
        text: "Leo Tolstoy",
        correct: false,
      },
      {
        text: "Franz Kafka",
        correct: false,
      },
      {
        text: "Charles Dickens",
        correct: false,
      },
    ],
  },
  {
    id: 10,
    question: "Trong lý thuyết đồ thị, đỉnh của một đồ thị được gọi là gì?",
    answers: [
      {
        text: "Node",
        correct: false,
      },
      {
        text: "Edge",
        correct: false,
      },
      {
        text: "Graph",
        correct: false,
      },
      {
        text: " Vertex",
        correct: true,
      },
    ],
  },
  {
    id: 11,
    question: "Siêu đại bàng là biệt danh của đội tuyển bóng đá quốc gia nào?",
    answers: [
      {
        text: "Maroc",
        correct: false,
      },
      {
        text: "Nigeria",
        correct: true,
      },
      {
        text: "Ghana",
        correct: false,
      },
      {
        text: "Congo",
        correct: false,
      },
    ],
  },
  {
    id: 12,
    question: "Nhà văn nào đã viết cuốn tiểu thuyết '1984'?",
    answers: [
      {
        text: "George Orwell",
        correct: true,
      },
      {
        text: "Aldous Huxley",
        correct: false,
      },
      {
        text: "Ray Bradbury",
        correct: false,
      },
      {
        text: "Franz Kafka",
        correct: false,
      },
    ],
  },
  {
    id: 13,
    question: "Trong sinh học, “Endoplasmic Reticulum” (ER) có hai dạng là gì? ",
    answers: [
      {
        text: "Soft ER và Hard ER",
        correct: false,
      },
      {
        text: "Smooth ER và Rough ER",
        correct: true,
      },
      {
        text: "Soft ER và Rough ER",
        correct: false,
      },
      {
        text: "mooth ER và Hard ER",
        correct: false,
      },
    ],
  },
  {
    id: 14,
    question: "Ai xem là Napoléon của Iran?",
    answers: [
      {
        text: "Reza Shah Pahlavi",
        correct: false,
      },
      {
        text: "Mohammad Reza Shah Pahlavi",
        correct: false,
      },
      {
        text: " Nader Shah",
        correct: true,
      },
      {
        text: "Reza Shah",
        correct: false,
      },
    ],
  },
  {
    id: 15,
    question: " Định lý này nói rằng không có ba số nguyên dương a, b và c sao cho a^n + b^n = c^n cho bất kỳ số nguyên dương n nào lớn hơn 2.Nó đã được chứng minh bởi ?",
    answers: [
      {
        text: "Định lý này đã được chứng minh bởi Andrew Wiles",
        correct: true,
      },
      {
        text: "Định lý này đã được chứng minh bởi Pierre de Fermat",
        correct: false,
      },
      {
        text: "Định lý này không thể chứng minh được",
        correct: false,
      },
      {
        text: "Định lý này đã được chứng minh bởi Paul Erdős",
        correct: false,
      },
    ],
  },
  {
    id: 16,
    question: " 'Hallelujah' là một trong những bản nhạc nổi tiếng nhất của Handel. Nó được lấy từ phần nào trong Kinh thánh?",
    answers: [
      {
        text: "Sách Phúc âm",
        correct: false,
      },
      {
        text: "Sách Khải huyền",
        correct: true,
      },
      {
        text: "Sách Xuất hành",
        correct: false,
      },
      {
        text: "Sách Thi thiên",
        correct: false,
      },
    ],
  }
  
];

const prizeMoney = [
  { id: 1, amount: " 500" },
  { id: 2, amount: " 1000" },
  { id: 3, amount: " 2000" },
  { id: 4, amount: " 3000" },
  { id: 5, amount: " 5000" },
  { id: 6, amount: " 7500" },
  { id: 7, amount: " 10000" },
  { id: 8, amount: " 12500" },
  { id: 9, amount: " 15000" },
  { id: 10, amount: " 20000" },
  { id: 11, amount: " 50000" },
  { id: 12, amount: " 100000" },
  { id: 13, amount: " 250000" },
  { id: 14, amount: " 500000" },
  { id: 15, amount: " 1000000" },
].reverse();

export { prizeMoney, data };
