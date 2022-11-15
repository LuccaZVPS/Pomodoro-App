import styled from 'styled-components';

export const Container = styled.div`
display: flex;
gap: 35px;
justify-content: center;
button{
    background: transparent;
    outline: none;
    border: none;
    color: #5265f7;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 10px;
    border-radius: 8px;
    :hover{
        background-color: #cadcff;
    }
}
#btn1500{
    background-color: #cadcff;

}


@media (max-width: 1900px) {
   button{
    padding: 8px;
    font-size: 1.15rem;
   }
}

@media (max-width: 1450px) {
   button{
    padding: 6px;
    font-size: 1rem;
   }
}
@media (max-width: 700px) {
    gap: 10px;
    
   button{
    font-size: 0.9rem;
   }
}
`;
