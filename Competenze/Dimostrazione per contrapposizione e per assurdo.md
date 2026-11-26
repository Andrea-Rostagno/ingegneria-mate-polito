---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["proof by contrapositive", "proof by contradiction", "dimostrazione per assurdo", "contronominale", "contrapposizione", "reductio ad absurdum"]
tags: [competenza, area/analisi]
---

# Dimostrazione per contrapposizione e per assurdo

> Per dimostrare $p\Rightarrow q$ si può dimostrare la contronominale $\rceil q\Rightarrow\rceil p$, cioè partire dalla negazione della tesi e arrivare a contraddire l'ipotesi.

## Definizione / enunciato
Grazie all'equivalenza
$$p\Rightarrow q \;=\; \rceil q\Rightarrow\rceil p$$
dimostrare che $p\Rightarrow q$ equivale a dimostrare che $\rceil q\Rightarrow\rceil p$.
- **Per contrapposizione**: si assume $\rceil q$ e si deduce direttamente $\rceil p$.
- **Per assurdo**: si nega la tesi e, con una serie di ragionamenti, si arriva a una **contraddizione**, cioè alla negazione dell'ipotesi di partenza. Questo prova che la tesi non può essere falsa.

## Formule chiave
$$\rceil q\Rightarrow\rceil p=\rceil(\rceil q)\vee\rceil p=q\vee\rceil p=\rceil p\vee q=p\Rightarrow q .$$

## Intuizione
L'implicazione è falsa solo se l'ipotesi è vera e la tesi falsa. Se dalla tesi falsa segue sempre un'ipotesi falsa, quel caso non può verificarsi.

## Come si usa
`Esercizi di logica.pdf` es. 6 chiede un esempio dell'equivalenza $p\Rightarrow q=\rceil q\Rightarrow\rceil p$. Con l'esempio della lezione 2: "se A è un quadrato allora è un rettangolo" equivale a "se A non è un rettangolo allora non è un quadrato". Attenzione a non confonderla con l'inversa $q\Rightarrow p$, che in generale non è equivalente (l'implicazione non è commutativa).

## Nei corsi
- **Analisi 1** (triennale): il programma chiede "Schema di dimostrazione per contrapposizione e per assurdo". Fonti: `triennale/ANNO 1/analisi 1/2021.09.28 - Fiandaca_Lezione2.pdf` (lezione 2, pp. 5-6); `triennale/ANNO 1/analisi 1/presentazione_corso15_2021-22.pdf` (programma); `triennale/ANNO 1/analisi 1/Esercizi di logica.pdf` (es. 6).
- **Analisi 1** (seconda passata, 2026-11-24): esempi nella teoria: l'unicità del limite (per assurdo, con intorni disgiunti), la non convergenza di $n^2$ (lezione dell'11/10/2021), l'irrazionalità di $\sqrt2$ (Morandotti, teor. 1.2.5). Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/0.Limiti-totale.pdf` (teor. 1.1, p. 5); `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (teor. 1.2.5, PDF p. 12).

## Prerequisiti
- [[Equivalenza logica]]: si fonda su $p\Rightarrow q=\rceil q\Rightarrow\rceil p$
- [[Implicazione logica]]: struttura ipotesi-tesi da dimostrare

## Porta a
- Nessuno.

## Collegati
- [[Negazione dei quantificatori]]: per negare la tesi serve saper negare enunciati quantificati
- [[Teorema di unicità del limite]]: si dimostra per assurdo
