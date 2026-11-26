---
tipo: competenza
area: analisi
corsi: [Metodi matematici e probabilità]
livello: [triennale]
aliases: ["residue", "calcolo dei residui", "residuo in un polo semplice", "residuo in un polo multiplo", "Res f(z0)"]
tags: [competenza, area/analisi]
---

# Residuo

> Il residuo di $f$ in una singolarità isolata $z_0$ è il coefficiente $c_{-1}$ del suo sviluppo di Laurent: l'unico termine che "sopravvive" integrando su una circonferenza attorno a $z_0$.

## Definizione / enunciato
**Definizione 3.23.** Se $z_0$ è una singolarità isolata e $f(z)=\sum_{n=-\infty}^{+\infty}c_n(z-z_0)^n$ in $0<|z-z_0|<r$, il **residuo** è
$$\operatorname{Res}f(z_0)=c_{-1}=\frac1{2\pi i}\oint_C f(z)\,dz,$$
con $C$ ad esempio la circonferenza $|z-z_0|=r$.

## Formule chiave
(§3.5.1)
- **Polo semplice:** $\operatorname{Res}f(z_0)=\lim_{z\to z_0}(z-z_0)f(z)$. Se $f=\frac{n(z)}{d(z)}$ con $n(z_0)\ne0$ e $z_0$ zero semplice di $d$: $\operatorname{Res}f(z_0)=\frac{n(z_0)}{d'(z_0)}$.
- **Polo di ordine $m$:**
$$\operatorname{Res}f(z_0)=\frac{1}{(m-1)!}\lim_{z\to z_0}\frac{d^{m-1}}{dz^{m-1}}\big[(z-z_0)^mf(z)\big].$$
- **Singolarità essenziale:** si legge $c_{-1}$ dallo sviluppo di Laurent.

## Intuizione
Integrando termine a termine su una circonferenza, ogni $(z-z_0)^n$ dà $0$ tranne $n=-1$, che dà $2\pi i$: il residuo è "ciò che resta". Per un polo di ordine $m$ moltiplicare per $(z-z_0)^m$ porta $c_{-1}$ al posto del coefficiente di grado $m-1$, che si estrae derivando.

## Come si usa
- Esempio 3.26 i): $\frac{z}{z^2-1}=\frac{1/2}{z-1}+\frac{1/2}{z+1}$, quindi i residui in $\pm1$ valgono $\frac12$.
- Esempio 3.26 ii): $e^{1/z}=1+\frac1z+\frac1{2z^2}+\dots$ ha singolarità essenziale in $0$ con residuo $1$.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): §3.5 "Residui e loro calcolo" e §3.5.1 (che nella dispensa termina con "Da completare"). Fonte: `triennale/ANNO 2/metodi matematici & probabilità/Capitolo 3 (1).pdf` (pp. 19-21 del PDF); formula per poli semplici anche nei Richiami di `8 - Teorema dei Residui.pdf`.

## Prerequisiti
- [[Singolarità isolate]]: il residuo è definito in una singolarità isolata
- [[Serie di Laurent]]: è il coefficiente $c_{-1}$

## Porta a
- [[Teorema dei residui]]: l'integrale è $2\pi i$ per la somma dei residui

## Collegati
- Nessuno.
