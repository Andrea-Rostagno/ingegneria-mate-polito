---
tipo: competenza
area: finanza
corsi: [Financial engineering]
livello: [magistrale]
aliases: [bootstrap method, bootstrap della curva zero, bootstrapping the zero curve, metodo del bootstrap, costruzione della curva dei tassi zero]
tags: [competenza, area/finanza]
---

# Bootstrap della curva dei tassi

> Procedura ricorsiva che ricava i fattori di sconto e i tassi zero dai prezzi di obbligazioni con scadenze crescenti.

## Definizione / enunciato
Date obbligazioni con scadenze $T_1<\dots<T_m$, tali che le date di pagamento di ciascuna (esclusa la scadenza) siano tra le scadenze già trattate (def. c04-bootstrap):
1. per uno ZCB con nominale $N$ e prezzo $P$: $B(0,T_k)=P/N$;
2. per un'obbligazione con flussi $c_1,\dots,c_j$ alle date $t_1<\dots<t_j=T_k$ e prezzo $P$:
$$B(0,T_k)=\frac{P-\sum_{i<j}c_iB(0,t_i)}{c_j};$$
3. $y(0,T_k)=-\ln B(0,T_k)/T_k$.

## Formule chiave
Ogni passo risolve una sola equazione lineare in un'incognita: il prezzo meno il valore dei flussi già scontati, diviso il flusso finale.

## Intuizione
Si parte dalle scadenze brevi (titoli senza cedola) e si "tira su" la curva un nodo alla volta. Se una data di pagamento manca nella curva, bisogna **interpolare** (di solito linearmente): è un'ipotesi in più, e interpolazioni diverse danno prezzi leggermente diversi.

## Come si usa
Esempio del libro (dati di Hull): ZCB a 3 mesi, 6 mesi, 1 anno a 97.5, 94.9, 90.0 danno $10.127\%$, $10.469\%$, $10.536\%$. Obbligazione a 1.5 anni (cedola 8 semestrale, prezzo 96): $B(0,1.5)=(96-7.396)/104=0.85196$, $y=10.681\%$. A 2 anni (cedola 12, prezzo 101.6): $B(0,2)=85.3942/106=0.80561$, $y=10.808\%$. Il listato lst:c04-bootstrap traduce il notebook del corso.

## Nei corsi
- **Financial engineering** (magistrale): cap. 4 §Il bootstrap della curva zero, def. c04-bootstrap, es. c04-bootstrap-hull. Fonti: `Libri/Financial engineering/capitoli/cap04.tex`; lezioni d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/13 - 06 marzo b - Boostrap.pdf`, `14 - 06 marzo c - Bootstrap_ZeroCurve_Bootstrap_Method.ipynb`.

## Prerequisiti
- [[Zero-coupon bond]]: i fattori di sconto sono le incognite
- [[Struttura a termine dei tassi]]: la curva da costruire

## Collegati
- [[Rendimento a scadenza]]: verifica di riprezzamento delle obbligazioni
- [[Tasso forward]]: si ricavano dalla curva costruita
- [[Interpolazione polinomiale]]: interpolazione lineare per le date mancanti
