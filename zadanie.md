# ZADANIE 1

## Zadanie

Zadanie polega na przygotowaniu aplikacji, która ma służyć jako prosty formularz zgłoszeniowy.

Podstawową technologią, która musi być wykorzystana jest React, mile widziany Typescript.

Aplikacja powinna wyglądać schludnie, styl wizualny jest dowolny.

Ekran formularza, nie powinien wykorzystywać gotowych bibliotek/frameworków do obsługi formularzy lub udostępniających ich komponenty (formik/antd i tym podobne). Ta część aplikacji powinna być zbudowana od zera.

Poza powyższym zastrzeżeniem, możliwe jest używanie dowolnych bibliotek (np. do routingu, stanu, animacji, ikon) i technologii pomocniczych.

## Realizacja

Aplikacja powinna posiadać stałe elementy, widoczne zawsze:

1. przycisk umożliwiający przejście na stronę główną
2. przycisk umożliwiający przejście na stronę z polityką prywatności

Aplikacja powinna składać się z czterech ekranów:

1. wybór oddziału firmy (strona główna)
2. ekran formularza
3. ekran podsumowania wysłania
4. ekran polityki prywatności

### Wybór oddziału

Zgłoszenie może być złożone do jednego z niezależnych oddziałów firmy. Dostępne oddziały:

- XYZ Warszawa, Poland
- ABC Kraków, Poland
- RNQ Berlin, Germany

### Formularz

Przejście do tego ekranu bez uprzedniego wybrania jednego z oddziałów firmy powinno być niemożliwe.

Pola:

- Imię i nazwisko
- Email
- Treść zgłoszenia

Uwagi do pola z treścią:

- Pole ma być uzupełnione przykładową treścią pobraną z
  <https://baconipsum.com/api/?type=all-meat&paras=2>
- Przykładowa treść może być dowolnie edytowana przez użytkownika
- Pole powinno mieć limit długości 5000 znaków
- Na dole znajdować ma się przycisk do zatwierdzenia/"wysłania". Dane wprowadzone przez użytkownika mają być zebrane przez aplikację, ale nie są nigdzie wysyłane.

Formularz powinien być walidowany. Wszystkie pola są wymagane, dodatkowo adres email powinien mieć poprawną strukturę. Niepoprawnego formularza nie powinno dać się "wysłać".

### Podsumowanie formularza

Po zatwierdzeniu formularza powinien pokazywać się ekran informujący o sukcesie operacji. Opcjonalnie - mogą tutaj zostać wyświetlone "wysłane" dane. Użytkownik powinien mieć stąd możliwość powrotu do ekranu wyboru oddziału.

### Ekran polityki prywatności

Strona z tytułem "Polityka prywatności" i kilkoma statycznymi paragrafami lorem ipsum.

### Opcjonalne wymagania (dodatkowo punktowane)

1. Dodać do stałych elementów, widocznych w aplikacji zawsze, komponent zegara z bieżącą datą i godziną.
2. Wysłanie formularza powinno kończyć się błędem, jeśli na zegarku sekundy są w przedziale 10-19, 30-39, 50-59.
3. Zachować responsywność aplikacji w przypadku błędu w punkcie drugim, czyli umożliwić użytkownikowi odpowiednią 'reakcję' na błąd.
4. Dodać do stałych elementów, widocznych w aplikacji zawsze, funkcjonalność zmiany motywu (dzień/noc), łącznie z odpowiednimi stylami.
5. Przygotować skrypt Dockerfile pozwalający uruchomić aplikację w Dockerze

## Odbiór

Po ukończeniu zadania, należy:

1. zbudować aplikację i opublikować publiczne demo (np. przy użyciu netlify, surge.sh, Github Pages, własnego hostingu)
2. umieścić kod wraz z instrukcją uruchomienia w publicznym repozytorium (np. GitHub, GitLab) a następnie wysłać nam linki do demo i repozytorium.
