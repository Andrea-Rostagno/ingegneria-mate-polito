---
tipo: competenza
area: informatica
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [stream, iostream, std::cout, std::cerr, std::cin, ofstream, ifstream, stringstream, operatore put into, operatore take from, I/O in C++]
tags: [competenza, area/informatica]
---

# Stream di input-output in C++

> L'input/output del C++ si basa sull'astrazione di stream: si "mette dentro" con `<<` e si "prende da" con `>>`, su terminale, file o stringhe.

## Definizione / enunciato
Uno **stream** $s$ ha due operazioni: "put into" `<<` e "take from" `>>`. L'operatore `<<` è una funzione $S\times T\to S$ (stream a sinistra, oggetto di tipo $T$ a destra) che restituisce lo stream, per cui le chiamate si concatenano da sinistra a destra: `s << x << " " << 1.234 << "\n";`.
Tipi di stream:
- `std::ostream` generico (`<iostream>`); globali `std::cout` (standard output) e `std::cerr` (standard error), `std::cin` per l'input da terminale;
- `std::ofstream` / `std::ifstream` per i file (`<fstream>`);
- `std::stringstream` per costruire o leggere stringhe (`<sstream>`).

## Formule chiave
```cpp
std::ofstream ofs("testfile.txt");
if ( ofs.is_open() ) {        // file aperto correttamente?
    ofs << "Hello, world\n";
    ofs.close();              // opzionale: ofstream è RAII
}
```
Conversione stringa-numero: `ss << "1.234"; double x; ss >> x;`.
Errori di estrazione (per esempio una stringa dove si attende un intero): `if (s.fail())` oppure `if (!(s >> x))`.

## Intuizione
Lo stesso codice scrive su schermo, file o stringa perché tutti questi oggetti sono stream: cambia solo dove finiscono i caratteri. Lettura da file: `while (!ifs.eof()) { ifs >> location >> temp; ... }`, dove anche `>>` è una funzione $S\times T\to S$.

## Come si usa
Esempi delle slide: leggere da `meteo.txt` coppie località-temperatura e stamparle; costruire con uno `stringstream` la frase "My name is ... and I am ... years old." e recuperarla con `ss.str()`.

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): lezione 3 di M. Cicuttin. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/lezione3.pdf` (p. 9-18).

## Prerequisiti
- [[Tipi fondamentali del C++]]: << e >> sono definiti tipo per tipo

## Porta a
- [[RAII]]: l'ofstream chiude il file quando esce di scope

## Collegati
- [[Lettura di file di testo]]: analogo in Python con open e readline
- [[Scrittura su file di testo]]: analogo in Python con write
