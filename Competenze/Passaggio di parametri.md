---
tipo: competenza
area: informatica
corsi: [Informatica, Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [parameter passing, parametri formali, parametri attuali, argomenti, variabile parametro, passaggio per valore, passaggio per riferimento, pass by reference, passaggio per riferimento costante, const reference, passaggio per puntatore]
tags: [competenza, area/informatica]
---

# Passaggio di parametri

> Come gli argomenti di una chiamata inizializzano le variabili parametro della funzione, e cosa succede se la funzione le modifica.

## Definizione / enunciato
Le **variabili parametro** (parametri formali) sono dichiarate nell'intestazione e ricevono gli **argomenti** (parametri attuali o effettivi) della chiamata. L'argomento può essere un letterale (`cubeVolume(2)`), una variabile (`cubeVolume(size)`) o un'espressione (`cubeVolume(a**2+b**2)`).

Argomento e parametro sono **due variabili distinte**: il parametro viene inizializzato con il valore dell'argomento. Riassegnare il parametro dentro la funzione non ha effetto fuori: con `total = 10` e `newPrice = addTax(total, 7.5)`, dentro la funzione `price` diventa 10.75 ma `total` resta 10.

Con le **liste** (P6) il parametro diventa un **alias** dello stesso oggetto: modificarne gli elementi (`values[i] = ...`, `append`, `sort`, ...) modifica la lista del chiamante; riassegnare il parametro (`values = []`, `values = values + [3]`, `values = sorted(values)`) invece rompe l'alias e non ha effetto fuori.

## Formule chiave
```python
def multiply(values, factor) :
    for i in range(len(values)) :
        values[i] = values[i] * factor   # modifica la lista del chiamante
multiply(scores, 10)
```

## Intuizione
Si passa sempre il "riferimento al valore": per numeri e stringhe (immutabili) l'effetto è quello di una copia; per oggetti mutabili come le liste la funzione lavora sullo stesso oggetto.

## Come si usa
Consiglio delle slide: non modificare le variabili parametro, usare variabili locali diverse. Esempio `reverse.py` (P6 p. 83): `readFloats` restituisce una lista, `multiply` ne modifica gli elementi, `printReversed` la legge senza modificarla.

## Nei corsi
- **Informatica** (triennale): unità P5 sezione 5.3, P6 sezione 6.4 (liste come argomenti). Fonti: `triennale/ANNO 1/informatica/Unita P5 - Funzioni.pdf` (p. 25-31), `triennale/ANNO 1/informatica/Unita P6 - Liste e Tabelle (3).pdf` (p. 76-84).
- **Programmazione e calcolo scientifico** (triennale): in C++ (lezione 5 di M. Cicuttin) le modalità sono esplicite. **Per valore** (`int f(int x)`): `x` è una copia locale, modificarla non tocca l'argomento, ma per oggetti grandi (una struct come `meteo_data`) la copia è costosa. **Per riferimento costante** (`void print(const meteo_data& md)`): nessuna copia, si legge l'oggetto del chiamante e ogni scrittura è un errore di compilazione; è il modo consigliato per passare una struct. **Per riferimento** (`void read_sensors(meteo_data& md)`): le modifiche avvengono sull'oggetto del chiamante. Le ultime due si possono simulare con i puntatori (`const meteo_data*` e `meteo_data*`, chiamando con `&md` e accedendo con `(*md).campo` o `md->campo`), ma il corso preferisce i riferimenti. Anche i puntatori si passano per riferimento (`double*&`) o per puntatore (`double**`). Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/lezione5.pdf` (p. 4-14).

## Prerequisiti
- [[Definizione di funzione]]: gli argomenti inizializzano i parametri

## Porta a
- [[Argomenti posizionali e nominali]]: regole per associare argomenti e parametri
- [[Struct e classi in C++]]: un metodo riceve implicitamente l'oggetto per riferimento (Programmazione e calcolo scientifico)

## Collegati
- [[Ambito di visibilità delle variabili]]: alternativa corretta alle variabili globali
- [[Alias e copia di liste]]: il parametro lista è un alias dell'argomento
- [[Puntatore]]: il passaggio per riferimento si simula con i puntatori (Programmazione e calcolo scientifico)
