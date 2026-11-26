---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["monotone function", "funzione crescente", "funzione decrescente", "strettamente monotona", "limite di funzioni monotone"]
tags: [competenza, area/analisi]
---

# Funzioni monotone

> Una funzione è crescente se conserva l'ordine e decrescente se lo inverte; se è strettamente monotona è iniettiva, e in ogni punto ha limiti laterali dati da sup e inf.

## Definizione / enunciato
Sia $f:A\subseteq\mathbb R\to\mathbb R$ (Mazzi Funzioni, def. 1.11). Per ogni $x_1,x_2\in A$ con $x_1<x_2$:
- crescente: $f(x_1)\le f(x_2)$; strettamente crescente: $f(x_1)<f(x_2)$;
- decrescente: $f(x_1)\ge f(x_2)$; strettamente decrescente: $f(x_1)>f(x_2)$.

**Prop. 1.4.** Se $f$ è strettamente monotona su $A$, è iniettiva su $A$ (il viceversa è falso: $1/x$ è iniettiva su $\mathbb R\setminus\{0\}$ ma non monotona).

**Limite delle funzioni monotone** (Mazzi Limiti, teor. 1.17). Se $f$ è crescente su $H^-=B^-(\bar x)\cap A\setminus\{\bar x\}$, con $\bar x$ di accumulazione da sinistra, allora esiste $\lim_{x\to\bar x^-}f(x)=\sup\{f(x):x\in H^-\}$; da destra, con $f$ crescente, il limite è l'$\inf$. Per le decrescenti si scambiano sup e inf. Se $f$ è crescente vicino a $\bar x\in A$: $\lim_{x\to\bar x^-}f\le f(\bar x)\le\lim_{x\to\bar x^+}f$.

## Formule chiave
$$f\ \text{crescente vicino a }\bar x\ \Rightarrow\ \lim_{x\to\bar x^-}f(x)=\sup_{H^-}f,\qquad\lim_{x\to\bar x^+}f(x)=\inf_{H^+}f$$

## Intuizione
Una funzione monotona non può oscillare: avvicinandosi a un punto i valori salgono (o scendono) verso un "tetto", che è il sup. Per questo una monotona ha sempre limiti laterali e le sue discontinuità possono essere solo salti.

## Come si usa
Esempi: $x^{2n+1}$, $\log x$, $e^x$, $\arctan x$, $\arcsin x$ sono strettamente crescenti, $\arccos x$ strettamente decrescente; la parte intera $[x]$ è crescente ma non strettamente. Il teorema sul limite delle monotone dà, come caso particolare, il teorema sulle successioni monotone, e permette di dedurre il limite di $f$ da quello lungo una sola successione (Mazzi, cor. 1.15).

## Nei corsi
- **Analisi 1** (triennale): "proprietà delle funzioni reali: monotonia" e "limiti di funzioni monotone" (nell'elenco dei teoremi d'esame). Nella def. 1.11(4) di Mazzi (p. 9, controllata sull'immagine) la stretta decrescenza è stampata con "$f(x_1)<f(x_2)$": è un refuso, qui è riportata con ">" coerentemente con la (3). Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/Capitolo Funzioni.pdf` (def. 1.11, prop. 1.4, es. 1.5, pp. 9-10); `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/0.Limiti-totale.pdf` (§1.9, teor. 1.17, cor. 1.14-1.15, pp. 31-33).

## Prerequisiti
- [[Funzioni iniettive e suriettive]]: strettamente monotona implica iniettiva
- [[Estremo superiore e inferiore]]: il limite è sup o inf

## Porta a
- [[Continuità della funzione inversa]]: continua e iniettiva = strettamente monotona
- [[Monotonia e segno della derivata]]: definizioni
- [[Classi di funzioni integrabili]]: le monotone limitate sono integrabili
- [[Criteri di convergenza per integrali impropri]]: con f≥0 la funzione integrale è crescente

## Collegati
- [[Punti di discontinuità]]: le monotone hanno solo salti
