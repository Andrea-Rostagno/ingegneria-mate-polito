---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["quantifiers", "predicato", "predicate", "quantificatore universale", "quantificatore esistenziale", "per ogni", "esiste", "esiste ed è unico", "ordine dei quantificatori"]
tags: [competenza, area/analisi]
---

# Quantificatori

> I simboli $\forall$ ("per ogni") e $\exists$ ("esiste") trasformano un predicato, il cui valore di verità dipende da una variabile, in una proposizione vera o falsa.

## Definizione / enunciato
Un **predicato** $p(x)$ è una proposizione in cui compare una variabile: la sua verità dipende dal valore assunto da $x$ (es. $p(x)$ = "$x$ è un numero dispari": $p(3)$ vera, $p(2)$ falsa). Si possono avere predicati in più variabili $p(x,y)$.
- $\forall x\; p(x)$: per ogni valore di $x$ si ha che $p(x)$ è vera (**quantificatore universale**).
- $\exists x\; p(x)$: esiste almeno un valore di $x$ per cui $p(x)$ è vera (**quantificatore esistenziale**).
- $\exists!\,x\; p(x)$: esiste un unico valore di $x$ per cui $p(x)$ è vera.

Applicando un quantificatore a un predicato si ottiene automaticamente un valore di verità.

## Formule chiave
**Ordine dei quantificatori.** Quantificatori dello stesso tipo si scambiano ($\forall x\forall y$, $\exists x\exists y$), quelli di tipo diverso no:
$$\forall x\,\exists y\;p(x,y)\;\ne\;\exists y\,\forall x\;p(x,y).$$
Nel primo $y$ può dipendere da $x$; nel secondo un solo $y$ va bene per tutti gli $x$.

## Intuizione
$\forall$ chiede di controllare tutti i casi, $\exists$ ne chiede uno solo. Invertire $\forall$ ed $\exists$ cambia chi "sceglie per primo", e quindi il significato.

## Come si usa
Lezione 2, con $x,y\in\mathbb N$ e $p(x,y)$ = "$x\le y$": $\forall x\,\exists y\; x\le y$ è **vera** (fissato $x$ si trova sempre un $y$ con $x\le y$); $\exists y\,\forall x\; x\le y$ è **falsa**, perché non esiste un naturale più grande di tutti gli altri. Con $X=\mathbb N_0$ e $p(x)$ = "$x$ è dispari", $\forall x\,p(x)$ è falsa.
`Esercizi di logica.pdf` es. 7-8 chiedono la verità di enunciati come $\forall x\,p(x)$, $\exists x\,q(x)$ sull'insieme dei pari, e delle quattro combinazioni di $\forall/\exists$ per $x\le y$ in $\mathbb N$, con controesempio quando sono falsi.

## Nei corsi
- **Analisi 1** (triennale): "Logica: ... predicati, quantificatori". Fonti: `triennale/ANNO 1/analisi 1/2021.09.28 - Fiandaca_Lezione2.pdf` (lezione 2, pp. 9, 11-14); `triennale/ANNO 1/analisi 1/Esercizi di logica.pdf` (es. 7-8).
- **Analisi 1** (seconda passata, 2026-11-24): le definizioni di estremo superiore, limite di successione ($\forall\varepsilon\ \exists\nu$) e limite di funzione ($\forall$ intorno $\exists$ intorno) sono le applicazioni principali; Mazzi insiste sulla posizione dei quantificatori nella definizione di limite (oss. 1.1). Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/Capitolo Preliminari.pdf` (§1.1.3); `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/0.Limiti-totale.pdf` (oss. 1.1, p. 1); `triennale/ANNO 1/analisi 1/Lezioni 2021-22 (manoscritte)/Lezione 2021-09-27.pdf`.

## Prerequisiti
- [[Connettivi logici]]: i predicati sono proposizioni con una variabile

## Porta a
- [[Negazione dei quantificatori]]: la negazione scambia $\forall$ ed $\exists$
- [[Operazioni sugli insiemi]]: insieme definito come $\{x\in X\mid p(x)\}$
- [[Assiomi dei numeri reali]]: gli assiomi sono enunciati quantificati
- [[Estremo superiore e inferiore]]: caratterizzazione con ε
- [[Funzioni iniettive e suriettive]]: definizioni con per ogni/esiste
- [[Limite di successione]]: ordine ∀ε ∃ν
- [[Limite di funzione]]: ∀ intorno ∃ intorno

## Collegati
- [[Assioma di Dedekind]]: esempio di enunciato con $\forall$ ed $\exists$ annidati
