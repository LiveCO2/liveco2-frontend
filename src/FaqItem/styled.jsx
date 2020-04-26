import styled from 'styled-components';

const OutterWrap = styled.div`
    display: block;
    border-bottom: 1px solid black;
    padding: 15px 0;
`;

const Question = styled.h3`
    margin-right: 12px;
`;

const Indicator = styled.h3`
    margin-left: auto;
    align-self: flex-start;
`;

const InnerWrap = styled.div`
    display: flex;
    cursor: pointer;
    align-items: center;
    &:hover {
        ${Question} {
            opacity: 0.5;
        }
        ${Indicator} {
            opacity: 0.5;
        }
    }
`;

const Answer = styled.div`
    box-sizing: content-box;
    transition-property: max-height;
    overflow: hidden;
    transition-duration: ${({ isActive }) => (isActive ? '1s' : '0.5s')};
    transition-timing-function: ${({ isActive }) => (isActive ? 'ease-in-out' : 'cubic-bezier(0, 1, 0, 1)')};
    max-height: ${({ isActive }) => (isActive ? '100vh' : '0vh')};
`;

const AnswerText = styled.p`
    padding: 12px 0;
`;

export {
    OutterWrap,
    InnerWrap,
    Question,
    AnswerText,
    Indicator,
    Answer,
};
