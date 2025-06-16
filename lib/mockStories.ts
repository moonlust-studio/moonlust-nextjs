export type Story = {
  id: string;
  title: string;
  genre: string;
  chapters: number;
  status: 'ongoing' | 'completed';
  cover: string;
};

export const mockStories: Story[] = [
  {
    id: '1',
    title: 'Cô Thư Ký Quyến Rũ',
    genre: 'Tình cảm, Ngoại tình',
    chapters: 12,
    status: 'ongoing',
    cover: '/covers/thu-ky.jpg'
  },
  {
    id: '2',
    title: 'Trò Chơi Cấm Đoán',
    genre: 'Tâm lý, Người lớn',
    chapters: 18,
    status: 'completed',
    cover: '/covers/cam-do.jpg'
  },
  {
    id: '3',
    title: 'Đêm Nồng Cháy',
    genre: 'Erotic Drama',
    chapters: 24,
    status: 'ongoing',
    cover: '/covers/dem-nong.jpg'
  }
];
export default mockStories;
