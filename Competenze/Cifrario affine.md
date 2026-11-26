---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: [affine cipher, cifrario a blocchi affine, affine block cipher, Enc(P) = A P + v]
tags: [competenza, area/informatica]
---

# Cifrario affine

> Cifrario a blocchi che applica a ogni blocco una trasformazione affine $P\mapsto AP+v$, con $A$ matrice invertibile. Generalizza Cesare (solo traslazione) e Hill (solo matrice), ma è lineare e quindi cade con poche coppie scelte.

## Definizione / enunciato
Dall'esercizio 3.8.7 di `Critto_week3.pdf`. Il messaggio è diviso in blocchi binari di dimensione $d$, $P=P_1\|P_2\|\cdots$ con $P_i\in\mathbb Z_2^d$. La chiave è una coppia $k=(A,v)$, con $A\in\mathbb Z_2^{d\times d}$ e $v\in\mathbb Z_2^d$:
$$\mathrm{Enc}_k(P_i)=A\cdot P_i+v.$$
Perché si possa decifrare, $A$ deve essere **invertibile**, cioè $A\in GL(d,\mathbb Z_2)$. Questo gruppo agisce su $\mathbb Z_2^d$.

## Formule chiave
$$C_i=AP_i+v,\qquad P_i=A^{-1}(C_i-v),\qquad |\mathcal K|=|GL(d,\mathbb Z_2)|\cdot2^d$$
L'ultima uguaglianza è un conteggio nostro, che risponde al punto b) dell'esercizio: $A$ invertibile e $v$ arbitrario.

## Intuizione
- Con $A=I$ si ottiene una pura traslazione, cioè un Cesare o Vernam sui blocchi.
- Con $v=0$ si ottiene il cifrario di Hill.
- La struttura affine è ciò che lo rende insicuro: ogni coppia nota $(P_i,C_i)$ fornisce $d$ equazioni **lineari** nelle incognite $(A,v)$. È l'opposto della "confusione" richiesta ai cifrari moderni.

## Come si usa
Il punto c) dell'esercizio chiede di mostrare che il cifrario non è sicuro contro un **CPA** e di trovare la minima quantità di testo necessaria. Ragionamento nostro, dalla formula:
1. si sceglie $P=0$ e si ottiene $v=\mathrm{Enc}_k(0)$;
2. si scelgono i vettori della base canonica $e_j$ e si ottengono le colonne $Ae_j=\mathrm{Enc}_k(e_j)-v$.

Bastano quindi $d+1$ testi scelti.

Il contesto della lezione sono gruppi finiti e azioni: le dispense definiscono orbita $G.p$, stabilizzatore $G_p$ e la relazione $|G.p|=|G|/|G_p|$, da cui si deduce il teorema di Lagrange.

## Nei corsi
- **Crittografia** (magistrale): appendice della lezione 3, "Gruppi finiti, azioni e cifrari affini". In lezione 3 si dice anche che il cifrario di Hill è generalizzato dal cifrario affine. Fonte: `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week3.pdf` (Critto 3, pp. 3, 34-36).

## Prerequisiti
- [[Matrice inversa]]: serve $A^{-1}$ per decifrare
- [[Gruppo]]: $GL(d,\mathbb Z_2)$ e azioni di gruppo

## Porta a
- Nessuno.

## Collegati
- [[Cifrario di Hill]]: caso particolare con $v=0$
- [[Cifrario di Cesare]]: caso particolare con $A=I$
- [[Teorema di Lagrange sui gruppi]]: dedotto dalla formula orbita-stabilizzatore nella stessa lezione
- [[Modelli di attacco crittografico]]: rotto da un CPA con $d+1$ testi scelti
