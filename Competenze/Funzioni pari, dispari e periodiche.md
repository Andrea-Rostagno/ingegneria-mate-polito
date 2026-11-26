---
tipo: competenza
area: analisi
corsi: [Analisi 1, Analisi 2]
livello: [triennale]
aliases: ["even function", "odd function", "periodic function", "periodo minimo", "funzioni simmetriche"]
tags: [competenza, area/analisi]
---

# Funzioni pari, dispari e periodiche

> Simmetrie di una funzione: pari se il grafico è simmetrico rispetto all'asse $y$, dispari se lo è rispetto all'origine, periodica se si ripete a ogni periodo $T$.

## Definizione / enunciato
Sia $f$ con dominio simmetrico rispetto all'origine (Mazzi, def. 1.10):
- $f$ è **pari** se $f(x)=f(-x)$ per ogni $x\in A$;
- $f$ è **dispari** se $f(x)=-f(-x)$ per ogni $x\in A$.

$f$ è **periodica di periodo** $T>0$ se $f(x+T)=f(x)$ per ogni $x$ (def. 1.9); il **periodo minimo** è il più piccolo $T$ con questa proprietà.

**Prop. 1.3.** Se $f$ ha periodo minimo $T$: $f$ ha periodo $kT$ per ogni $k\in\mathbb N$, e $f(\alpha x)$ ha periodo minimo $T/\alpha$ per ogni $\alpha>0$.

## Formule chiave
$$f\ \text{pari}: f(-x)=f(x);\qquad f\ \text{dispari}: f(-x)=-f(x);\qquad g(x)=f(\alpha x)\ \Rightarrow\ T_g=\frac T\alpha$$

## Intuizione
Le simmetrie dimezzano il lavoro: per una funzione pari o dispari basta studiare $x\ge0$, per una periodica un solo periodo. Le regole sono quelle dei segni: pari·pari e dispari·dispari danno pari, pari·dispari dà dispari.

## Come si usa
Esempi delle fonti: $x^{2n}$ e $\cos x$ sono pari, $x^{2n+1}$, $\sin x$ e $\tan x$ dispari; $\sin$ e $\cos$ hanno periodo minimo $2\pi$, $\tan$ ha periodo $\pi$, la mantissa periodo $1$. Esercizi di Mazzi: se $f$ è dispari e definita in $0$ allora $f(0)=0$; parità di somme, prodotti e composte; periodo di $f+g$ e $fg$ con periodi $T$ e $kT$. Nel materiale 2021-22 c'è anche un foglio dedicato, `OPERAZIONI TRA FUNZIONI PERIODICHE.pdf`.

## Nei corsi
- **Analisi 1** (triennale): "simmetrie, periodicità". Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/Capitolo Funzioni.pdf` (def. 1.9-1.10, prop. 1.3, es. 1.1-1.2, pp. 8-9; §1.5.8); `triennale/ANNO 1/analisi 1/Esercitazioni 2021-22 (manoscritte e svolte)/OPERAZIONI TRA FUNZIONI PERIODICHE.pdf` (scansione, non trascritta).
- **Analisi 2** (triennale): punto di partenza delle serie di Fourier. $f$ è $T$-periodica se $f(x+T)=f(x)$ per ogni $x$, e il prototipo è la sinusoide $A\sin(\omega x+\varphi)$ con $\omega=\frac{2\pi}T$. Le simmetrie semplificano i calcoli: se $f$ è pari i $b_n$ sono nulli, se è dispari gli $a_n$; nello sviluppo in serie di potenze una $f$ pari ha solo potenze pari e una dispari solo potenze dispari. Fonti: `triennale/ANNO 2/analisi 2/AII 22 serie di fourier.pdf` (lez. 14/12/2022, pp. 1-3); `triennale/ANNO 2/analisi 2/AII 23 2022 serie di fourier.pdf` (p. 10); `triennale/ANNO 2/analisi 2/AII 21 2022 serie di potenze.pdf` (p. 23).

## Prerequisiti
- [[Funzione composta e funzione inversa]]: parità della composta

## Porta a
- [[Funzioni trigonometriche inverse]]: si restringe a un periodo
- [[Serie di Fourier]]: sviluppo delle funzioni periodiche (Analisi 2)

## Collegati
- [[Formule trigonometriche]]: seno e coseno sono 2π-periodiche
- [[Trasformazioni del grafico]]: simmetrie del grafico
- [[Serie di Taylor]]: f pari ha solo potenze pari nello sviluppo (Analisi 2)
