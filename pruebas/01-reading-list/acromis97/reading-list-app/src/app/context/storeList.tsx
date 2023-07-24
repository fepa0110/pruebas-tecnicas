"use client";

import { createContext, useState } from "react";
import { Book } from "../types/Book";
import libraryMock from "../../../../../books.json";

interface StoreListType {
	storeList: Book[];
}

export const StoreListContext = createContext<StoreListType>({
	storeList: [],
});

export function StoreListProvider({ children }) {
    // Inicializo la lista de libros mockeada
	const [ storeList ] = useState<Book[]>(
		libraryMock.library.map((book) => {
			return { ...book.book, inReadingList: false };
		})
	);

	return (
		<StoreListContext.Provider
			value={{
				storeList,
			}}>
			{children}
		</StoreListContext.Provider>
	);
}
