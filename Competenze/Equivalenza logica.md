---
tipo: competenza
area: analisi
corsi: [Analisi 1, Informatica]
livello: [triennale]
aliases: ["logical equivalence", "doppia implicazione", "se e solo se", "tautologia", "tautology", "leggi di De Morgan", "De Morgan's laws"]
tags: [competenza, area/analisi]
---

# Equivalenza logica

> Due proposizioni sono equivalenti se la verità dell'una implica quella dell'altra e viceversa, cioè se hanno la stessa tavola di verità.

## Definizione / enunciato
$p$ e $q$ sono **equivalenti** ($p=q$) se le loro tavole di verità coincidono. La **doppia implicazione** $p\Leftrightarrow q$ si legge "$p$ se e solo se $q$" ed è
$$p\Leftrightarrow q=(p\Rightarrow q)\wedge(q\Rightarrow p),$$
vera quando $p$ e $q$ hanno lo stesso valore di verità.

Una **tautologia** è una proposizione che ha sempre valore di verità vero (es. $[p\wedge(p\Rightarrow q)]\Rightarrow q$, oppure $p\vee\rceil p$).

## Formule chiave
- Commutatività: $p\wedge q=q\wedge p$, $\;p\vee q=q\vee p$.
- Associatività: $p\wedge(q\wedge r)=(p\wedge q)\wedge r$, $\;p\vee(q\vee r)=(p\vee q)\vee r$.
- De Morgan (`Esercizi di logica.pdf` es. 1): $\rceil(p\wedge q)=\rceil p\vee\rceil q$, $\;\rceil(p\vee q)=\rceil p\wedge\rceil q$.
- Contronominale: $p\Rightarrow q=\rceil q\Rightarrow\rceil p$.
- Non equivalenza (es. 2): $(p\wedge q)\vee r\ne p\wedge(q\vee r)$.

## Intuizione
L'equivalenza permette di sostituire una proposizione con un'altra più comoda senza cambiarne il significato logico; si verifica confrontando le tavole riga per riga (con tre proposizioni servono 8 righe).

## Come si usa
Lezione 2: si costruiscono le tavole di $p\wedge q$ e $q\wedge p$, che coincidono, quindi $\wedge$ è commutativo e si può scambiare l'ordine. Per la contronominale si usa la catena $\rceil q\Rightarrow\rceil p=\rceil(\rceil q)\vee\rceil p=q\vee\rceil p=\rceil p\vee q=p\Rightarrow q$.
Per mostrare una **non** equivalenza basta trovare una riga in cui le due tavole differiscono.

## Nei corsi
- **Analisi 1** (triennale): Fonti: `triennale/ANNO 1/analisi 1/2021.09.28 - Fiandaca_Lezione2.pdf` (lezione 2, pp. 4, 6, 8); `triennale/ANNO 1/analisi 1/Esercizi di logica.pdf` (es. 1-3, 6).
- **Informatica** (triennale): unità P3, leggi di De Morgan sulle condizioni booleane di Python: `not(A and B)` equivale a `not(A) or not(B)`, `not(A or B)` a `not(A) and not(B)`. Esempio delle slide: `country != "USA" and state != "AK" and state != "HI"` equivale a `not(country == "USA" or state == "AK" or state == "HI")`. Fonti: `triennale/ANNO 1/informatica/Unita P3 - Decisioni.pdf` (p. 99).
- **Analisi 1** (seconda passata, 2026-11-24): Mazzi, prop. 1.2: $(p\Rightarrow q)\Leftrightarrow(\neg q\Rightarrow\neg p)$; leggi di De Morgan per proposizioni e insiemi (teor. 1.1 del §1.2). Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/Capitolo Preliminari.pdf` (prop. 1.2, p. 3; teor. 1.1).

## Prerequisiti
- [[Connettivi logici]]: confronto delle tavole di verità
- [[Implicazione logica]]: la doppia implicazione ne è la congiunzione

## Porta a
- [[Dimostrazione per contrapposizione e per assurdo]]: si fonda su $p\Rightarrow q=\rceil q\Rightarrow\rceil p$

## Collegati
- [[Operatori booleani]]: le leggi di De Morgan negano combinazioni di and e or
- [[Validazione dell'input]]: la condizione fuori intervallo è la negazione di De Morgan di quella dentro
