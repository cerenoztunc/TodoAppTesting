import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Todo from "./Todo";

describe("Todo Tests", () => {
    let inputItem, addBtn;

    beforeEach(()=>{
        render(<Todo/>);
        addBtn = screen.getByText("Add");
        inputItem = screen.getByLabelText("Text");
    });

    it("Varsayılan nesneler render edilmeli", () => {
        const items = screen.getAllByText(/Item/i);
        expect(items.length).toEqual(3);
    });

    it('Input ve Buton dokümanda bulunmalı', () => {
        expect(addBtn).toBeInTheDocument();
        expect(inputItem).toBeInTheDocument();
    });

    it("Input'a string girilip butona baslınca listeye eklenmeli", () => {
        //input'u doldur
        const name = "Ceren";
        userEvent.type(inputItem, name);

        //buton'a tıkla
        userEvent.click(addBtn);

        //olması beklenen
        expect(screen.getByText(name)).toBeInTheDocument();

    });
});