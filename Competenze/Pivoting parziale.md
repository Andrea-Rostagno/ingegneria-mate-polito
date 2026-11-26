---
tipo: competenza
area: numerica
corsi: [Algebra lineare, Metodi numerici]
livello: [triennale]
aliases: ["partial pivoting", "pivoting", "scelta del pivot", "strategia del pivot massimo"]
tags: [competenza, area/numerica]
---

# Pivoting parziale

> Strategia che a ogni passo di Gauss porta in posizione pivot l'elemento di modulo massimo della colonna, per avere moltiplicatori piccoli.

## Definizione / enunciato
Se al passo $k$ si ha $a_{kk}^{(k)}=0$, Gauss procede solo scambiando la riga $k$ con una riga $r>k$ con $a_{rk}^{(k)}\ne0$. Conviene scambiare anche quando il pivot è non nullo ma piccolo, perché un moltiplicatore $m_{ik}=a_{ik}^{(k)}/a_{kk}^{(k)}$ grande amplifica gli errori di arrotondamento. Il **pivoting parziale** sceglie a ogni passo l'indice $r$ con
$$|a_{rk}^{(k)}|=\max_{k\le i\le n}|a_{ik}^{(k)}|$$
e scambia le equazioni $k$ e $r$. È superfluo se $A$ è a diagonale dominante per colonne o simmetrica definita positiva.

## Formule chiave
$$|a_{rk}^{(k)}|=\max_{k\le i\le n}|a_{ik}^{(k)}|\ \Rightarrow\ |m_{ik}|\le1$$
(la conseguenza $|m_{ik}|\le1$ è immediata dalla scelta, non è scritta nelle slide)

## Intuizione
Il pivoting non cambia il problema (né il suo condizionamento) ma rende l'algoritmo più stabile: moltiplicatori piccoli impediscono la crescita degli errori nei passi successivi.

## Come si usa
Esempio delle slide: $n=18$, $a_{ij}=\cos((j-1)\theta_i)$, $\theta_i=\frac{2i-1}{2n}\pi$, $b_i=\sum_ja_{ij}$, $K_\infty(A)\approx17$. Errore relativo in norma infinito $\approx10^{-9}$ senza pivoting, $\approx10^{-15}$ con pivoting parziale. In Matlab `x = A\b` usa Gauss con pivoting parziale (o un algoritmo specifico se $A$ ha una struttura particolare).

## Nei corsi
- **Algebra lineare** (triennale): modulo di calcolo numerico del corso (slide 2022, esempi in Matlab). Fonti: `triennale/ANNO 1/algebra lineare/2022_cn3_sistemi_lineari_print.pdf` (slide 65-70).
- **Metodi numerici** (triennale, L. Scuderi, a.a. 2022/23): scambio preliminare di equazioni a ogni passo per ridurre l'amplificazione degli errori di arrotondamento; superfluo se $A$ è a diagonale dominante per colonne o simmetrica definita positiva. Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_02_sistemi_lineari_print (2).pdf` (p. 24).

## Prerequisiti
- [[Metodo di eliminazione di Gauss]]: scelta del pivot a ogni passo
- [[Matrice di permutazione]]: gli scambi di righe sono permutazioni

## Porta a
- Nessuno.

## Collegati
- [[Stabilità di un algoritmo]]: moltiplicatori piccoli non amplificano gli errori
- [[Matrice a diagonale dominante]]: superfluo se dominante per colonne
