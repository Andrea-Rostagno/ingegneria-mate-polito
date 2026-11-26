---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["negation of quantifiers", "negazione di un enunciato quantificato", "controesempio", "counterexample"]
tags: [competenza, area/analisi]
---

# Negazione dei quantificatori

> Negare un enunciato quantificato scambia $\forall$ con $\exists$ e nega il predicato: per smentire un "per ogni" basta un controesempio.

## Definizione / enunciato
$$\rceil(\forall x\;p(x))=\exists x\;\rceil p(x),\qquad \rceil(\exists x\;p(x))=\forall x\;\rceil p(x).$$
Con più quantificatori si procede da sinistra: ogni quantificatore attraversato dalla negazione cambia tipo, e alla fine si nega il predicato.

## Formule chiave
Esercizio 1 della lezione 2:
$$\rceil\big(\forall n,m\in\mathbb N_0\;\exists c\mid cn\ge m\big)=\exists\, n,m\in\mathbb N_0\mid \forall c:\; cn<m .$$
(Nella scansione le lettere $n$ e $m$ si distinguono a fatica e la conclusione è scritta con $\mathbb N$ anziché $\mathbb N_0$: da verificare sul PDF.)
Esercizio 2: $\rceil\big(\exists n\in\mathbb N_0\mid\forall m\in\mathbb N\;\; m^2\ge n^2\Rightarrow mn\ge1\big)=\forall n\in\mathbb N_0\;\exists m\in\mathbb N\mid \rceil\big(m^2\ge n^2\Rightarrow mn\ge 1\big)$.

## Intuizione
"Non tutti gli studenti hanno studiato" significa "esiste almeno uno studente che non ha studiato"; "non esiste uno studente che abbia studiato" significa "tutti gli studenti non hanno studiato" (lezione 2). La prima equivalenza è quella più usata: per dimostrare che un'affermazione universale è falsa basta trovare l'$x$ che non realizza $p(x)$, cioè un **controesempio**.

## Come si usa
Lezione 1, "vero o falso": per smentire $a^2+b^2\le(a+b)^2$ basta $a=2$, $b=-3$ ($4+9\le1$ è falso); per smentire $|a|+|b|\le|a+b|$ basta $a=3$, $b=-2$ ($5\le1$ è falso). Nella nota "NB" la docente sottolinea che per dimostrare la falsità di un'affermazione è sufficiente trovare un esempio in cui non "funziona".
`Esercizi di logica.pdf` es. 9: negare $\forall x\in\mathbb N\,\exists y\in\mathbb N$ tale che $x\ge y$ e $\exists x\in\mathbb N\,\forall y\in\mathbb N$ tale che $x\ge y$.

## Nei corsi
- **Analisi 1** (triennale): Fonti: `triennale/ANNO 1/analisi 1/2021.09.28 - Fiandaca_Lezione2.pdf` (lezione 2, pp. 14-17); `triennale/ANNO 1/analisi 1/2021.09.27 - Fiandaca_Lezione1.pdf` (lezione 1, p. 12); `triennale/ANNO 1/analisi 1/Esercizi di logica.pdf` (es. 8-9).
- **Analisi 1** (seconda passata, 2026-11-24): applicazione centrale nella teoria dei limiti: Mazzi scrive che $\lim f\ne\ell$ significa $\exists B(\ell)\ \forall B(\bar x)\ \exists x\in B(\bar x)\cap A\setminus\{\bar x\}:\ f(x)\notin B(\ell)$ (formula (1.15)). Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/0.Limiti-totale.pdf` (p. 3).

## Prerequisiti
- [[Quantificatori]]: la negazione scambia $\forall$ ed $\exists$
- [[Connettivi logici]]: la negazione applicata a enunciati quantificati

## Porta a
- Nessuno.

## Collegati
- [[Dimostrazione per contrapposizione e per assurdo]]: per negare la tesi serve saper negare enunciati quantificati
- [[Valore assoluto]]: controesempio $a=3$, $b=-2$ alla disuguaglianza rovesciata
- [[Limite di funzione]]: come si scrive che il limite non è ℓ
