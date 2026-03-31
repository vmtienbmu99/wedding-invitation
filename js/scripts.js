const weddingData = {
  groom: {
    role: "Chú rể",
    name: "Tên chú rể",
    parents: "Con ông bà: ...",
    hometown: "Quê quán: ...",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
  },
  bride: {
    role: "Cô dâu",
    name: "Tên cô dâu",
    parents: "Con ông bà: ...",
    hometown: "Quê quán: ...",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80"
  },
  hero: {
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
    desc: "Hạnh phúc của chúng tôi sẽ trọn vẹn hơn khi có sự hiện diện và lời chúc phúc từ bạn."
  },
  event: {
    title: "Lễ Thành Hôn",
    time: "17:00 | Chủ Nhật, 08.02.2026",
    lunar: "Tức ngày ... âm lịch",
    venue: "Trung tâm tiệc cưới",
    address: "Địa chỉ tổ chức tiệc cưới"
  },
  gallery: [
    "https://github.com/vmtienbmu99/thiepmoicuoi/blob/main/assets/img/gallery/01.jpg",
    "https://github.com/vmtienbmu99/thiepmoicuoi/blob/main/assets/img/gallery/02.jpg",
    "https://github.com/vmtienbmu99/thiepmoicuoi/blob/main/assets/img/gallery/03.jpg",
    "https://github.com/vmtienbmu99/thiepmoicuoi/blob/main/assets/img/gallery/04.jpg",
    "https://github.com/vmtienbmu99/thiepmoicuoi/blob/main/assets/img/gallery/05.jpg",
    "https://github.com/vmtienbmu99/thiepmoicuoi/blob/main/assets/img/gallery/06.jpg",
    "https://github.com/vmtienbmu99/thiepmoicuoi/blob/main/assets/img/gallery/08.jpg",
    "https://github.com/vmtienbmu99/thiepmoicuoi/blob/main/assets/img/gallery/09.jpg",
  ],
  story: [
    {
      year: "2018",
      title: "Lần đầu gặp nhau",
      text: "Một cuộc gặp gỡ rất tình cờ nhưng lại là khởi đầu của một hành trình đẹp."
    },
    {
      year: "2020",
      title: "Chính thức yêu nhau",
      text: "Từ những cuộc trò chuyện giản dị, chúng tôi bắt đầu đồng hành cùng nhau trong cuộc sống."
    },
    {
      year: "2024",
      title: "Lời cầu hôn",
      text: "Một khoảnh khắc đáng nhớ để cả hai cùng quyết định bước sang chương mới của cuộc đời."
    },
    {
      year: "2026",
      title: "Ngày về chung một nhà",
      text: "Chúng tôi hạnh phúc mời bạn đến chứng kiến và chia sẻ niềm vui trong ngày trọng đại."
    }
  ],
  gifts: [
    {
      role: "Mừng cưới chú rể",
      name: "Tên chú rể",
      bank: "VietinBank",
      account: "0000 0000 000"
    },
    {
      role: "Mừng cưới cô dâu",
      name: "Tên cô dâu",
      bank: "Techcombank",
      account: "1111 1111 111"
    }
  ]
};

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function setImage(id, value) {
  const el = document.getElementById(id);
setupRevealAnimation();
