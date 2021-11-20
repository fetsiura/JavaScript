![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/152855/73064373-5ed69780-3ea1-11ea-8a71-3d370a5e7dd8.png)



Zadanie
---

**Nie używajcie eventu DOMContentLoaded. Skrypt jest wczytany do pliku html przed końcem body.**

Napiszcie funkcję o nazwie concatArray(array1, array2), która przyjmuje jako parametry dwie tablice. 

Niech funkcja ta zwraca nową tablicę będącą połączeniem tych dwóch.

Przykład:
```js
 concatArray( [1,3],[3,5] ); // zwróci [1,3,3,5]
```




## Zadanie 2

Używając JavaScript dopiszcie do wszystkich divów o klasie color nasłuchiwanie zdarzeń, 
które po najechaniu na element sprawi, że kolor diva zmieni się na losowy, 
a na divie pokaże się tekst trzymany w data-text. 

Zjechanie z diva powinno usuwać tekst, ale div powinien zostać pokolorowany. 

Ponowne najechanie powinno zmienić kolor tła i znowu wyświetlić tekst.

**Hint:** 
Żeby uzyskać losowy kolor użyj poniższego kodu:

```
let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
```

Zadanie
---

W tym zadaniu możecie używać eventu DOMContentLoaded.

Do wszystkich guzików znajdujących się na stronie dopiszcie event tak,   
aby po naciśnięciu przycisku w divie o id container pojawił się tekst trzymany w data-text.

Zadanie
---

W tym zadaniu możecie używać eventu DOMContentLoaded.

Na stronie znajduje się lista zakupów.   
Popatrzcie na HTML i zobaczcie jak lista jest zbudowana.   
Dopiszcie odpowiednią obsługę eventów tak, aby:
- po kliknięciu przycisku pierwszego do listy został dopisany nowy produkt - chleb.
- po kliknięciu przycisku drugiego z listy był usuwany ostatni element.
- po kliknięciu przycisku trzeciego na końcu listy był dodawny nowy produkt, który jest klonem drugiego produktu - o ile ten istnieje.

Zadanie
---

Wasz sklep internetowy zajmuje się sprzedażą książek.   
Wprowadzacie nowy produkt do oferty czyli ebooki.  

**Stworzenie klasy bazowej**
Stwórzcie klasę o nazwie Product.   
Będzie to klasa, która w swoim konstruktorze powinna ustawiać takie dane jak 
- title - tytuł produktu ,
- author - autor

**Stworzenie obiektów**  
W związku z dodaniem do oferty nowego produktu - ebooka - stwórzcie dwie klasy dziedziczące po klasie bazowej:  
-**Ebook**,
-**Book**.

Utwórzcie te klasy w taki sposób, aby można było na ich podstawie stworzyć następujące obiekty:  
- ebook pod tytułem **Ciemniejsze niebo** napisany przez **Ruben Eliassen**. 
- książkę pod tytułem **Najdłuższa noc** napisaną przez **Macieja Dancewicza**. 

**Wyświetlanie informacji o produkcje**
- W odpowiedniej klasie stwórzcie metodę printInfo(). 
- Do wyświetlanie wykorzystajcie ten szablon tekstu:    
`${this.constructor.name} - title: ${this.title}, author: ${this.author}`

**Zamawianie produktów**  
Wasi klienci chcą móc ściągać oraz zamawiać książki na podany adres.   
Stwórzcie w odpowiednich klasach następujące metody:
- download - która wypisuje w konsoli tekst **Ściąganie... [tutaj wstawcie tytuł]**. Niech ten tekst również będzie zwracany przez metodę oprócz wypisania w konsoli.
- order - która wypisuje w konsoli tekst **Podaj adres dostawy!** Niech ten tekst również będzie zwracany przez metodę oprócz wypisania w konsoli.



Zadanie
---

Korzystając z adresu [https://swapi.dev/api/starships](https://swapi.dev/api/starships) wczytajcie na stronę informacje o statkach z Gwiezdnych Wojen. 

Kolejne statki wstawcie do listy.  
Nazwy statków wczytajcie do elementów h2, natomiast model do elementów h3. 

Utwórzcie te elementy i wstawcie je do DOM. 

Zauważcie, że dane nas interesujące znajdują się w tablicy, która znajduje się w jednym ze zwracanych w obiekcie atrybutów. 

**Hint:**  
 Zobaczcie jak wygląda w konsoli obiekt, który otrzymujecie jako odpowiedź, zanim wstawicie content na stronę.

