import Nav from 'src/components/Nav';
import BottomNav from 'src/components/Nav/BottomNav';

// main page의 카드 작성 페이지
function Write() {
    return (
        <>
            <Nav />
            <BottomNav selected="Write" />
        </>
    );
}

export default Write;
