---
tipo: competenza
area: analisi
corsi: [Analisi 1, Algebra lineare]
livello: [triennale]
aliases: ["axioms of the real numbers", "campo ordinato", "ordered field", "assiomi di campo", "assiomi d'ordine", "relazione d'ordine", "proprietà di somma, prodotto, ordinamento"]
tags: [competenza, area/analisi]
---

# Assiomi dei numeri reali

> $\mathbb R$ è definito assiomaticamente come un insieme con somma, prodotto e una relazione d'ordine compatibile: un campo ordinato, a cui si aggiunge l'assioma di continuità.

## Definizione / enunciato
Esiste un insieme $\mathbb R$ con due operazioni interne $+$ e $\cdot$ tali che:
- $\forall a,b\in\mathbb R$: $a+b=b+a$, $\;a\cdot b=b\cdot a$ (commutatività);
- $\forall a,b,c\in\mathbb R$: $(a+b)+c=a+(b+c)$, $\;(a\cdot b)\cdot c=a\cdot(b\cdot c)$ (associatività);
- $\forall a,b,c$: $(a+b)\cdot c=a\cdot c+b\cdot c$ (distributività);
- $\exists\,0\in\mathbb R: a+0=a$; $\;\exists\,1\in\mathbb R: a\cdot 1=a$;
- $\forall a\in\mathbb R\;\exists a'\in\mathbb R: a+a'=0$ (notazione $a'=-a$, $a+(-a)=a-a$);
- $\forall a\in\mathbb R,\ a\ne0,\ \exists\tilde a\in\mathbb R: a\tilde a=1$ (notazione $\tilde a=\frac1a=a^{-1}$).

$\mathbb R$ è dotato di una relazione d'ordine $\le$ tale che:
- $\forall x\in\mathbb R$: $x\le x$;
- se $x\le y$ e $y\le x$ allora $x=y$;
- se $x\le y$ e $y\le z$ allora $x\le z$;
- $\forall x,y\in\mathbb R$: $x\le y$ oppure $y\le x$;
- se $x\le y$, allora $\forall z\in\mathbb R$: $x+z\le y+z$;
- se $x\le y$ e $z\ge0$, allora $xz\le yz$. (La scansione scrive $xz\ge yz$, che contraddice la compatibilità con l'ordine: probabile svista di trascrizione, da verificare sul PDF.)

## Intuizione
Tutte le regole di calcolo e di manipolazione delle disuguaglianze discendono da questi assiomi. L'ultimo spiega perché in una disequazione si può moltiplicare per una quantità solo se se ne conosce il segno.

## Come si usa
Le regole d'ordine giustificano i passaggi delle disequazioni: aggiungere la stessa quantità ai due membri, moltiplicare per una quantità positiva. Con una quantità di segno ignoto (un denominatore $5-x$) non si può moltiplicare: si porta tutto a primo membro e si studia il segno (lezione 1).

## Nei corsi
- **Analisi 1** (triennale): "Insiemi numerici: N, Z, Q, R. Proprietà di somma, prodotto, ordinamento". Fonti: `triennale/ANNO 1/analisi 1/Assiomi dei numeri reali.pdf` (p. 1 assiomi di somma e prodotto, p. 2 assiomi d'ordine; scansione manoscritta); `triennale/ANNO 1/analisi 1/presentazione_corso15_2021-22.pdf` (programma).
- **Algebra lineare** (triennale): la nozione di campo (9 proprietà di somma e prodotto) definisce gli scalari degli spazi vettoriali; $\mathbb R$, $\mathbb Q$, $\mathbb C$ sono i campi usati nel corso. Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/7_Spazi_vettoriali.pdf` (p. 4).
- **Analisi 1** (seconda passata, 2026-11-24): Morandotti definisce $\mathbb R$ come campo totalmente ordinato in cui ogni insieme non vuoto superiormente limitato ha sup (def. 1.5.18); i complessi sono costruiti come campo su $\mathbb R^2$. Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (def. 1.5.4, 1.5.18, prop. 1.5.41, PDF pp. 26, 43); `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/Capitolo Preliminari.pdf` (§1.3).

## Prerequisiti
- [[Quantificatori]]: gli assiomi sono enunciati quantificati

## Porta a
- [[Assioma di Dedekind]]: completa gli assiomi di campo ordinato
- [[Valore assoluto]]: definito confrontando con 0 tramite l'ordine
- [[Disequazioni fratte]]: si moltiplica solo per quantità di segno noto
- [[Numeri complessi]]: C è un campo come R

## Collegati
- [[Connettivi logici]]: $x\le y$ letto come disgiunzione $x<y \vee x=y$
- [[Spazio vettoriale]]: R è il campo ordinato su cui si costruiscono gli spazi reali
