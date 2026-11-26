---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["asymptotes", "asintoto orizzontale", "asintoto verticale", "asintoto obliquo"]
tags: [competenza, area/analisi]
---

# Asintoti

> Rette a cui il grafico si avvicina: verticali dove la funzione diverge in un punto, orizzontali o obliqui quando $f(x)=mx+q+o(1)$ all'infinito.

## Definizione / enunciato
**Asintoto per $x\to+\infty$** (Mazzi, def. 1.21): se esistono $m,q\in\mathbb R$ con
$$f(x)=mx+q+o(1)\quad(x\to+\infty),\qquad\text{cioè}\quad\lim_{x\to+\infty}[f(x)-(mx+q)]=0,$$
la retta $y=mx+q$ è asintoto destro; se $m=0$ è **orizzontale** ($\lim f=q$), se $m\neq0$ è **obliquo** ($\lim f=\pm\infty$). Analogo per $x\to-\infty$.

**Asintoto verticale** (lezione dell'08/11/2021): se $\lim_{x\to x_0^+}f(x)=\pm\infty$ la retta $x=x_0$ è asintoto verticale destro (analogamente sinistro); si cerca nei punti di accumulazione del dominio che non gli appartengono o nei punti di discontinuità.

**Prop. 1.16** (calcolo dell'obliquo).
$$f\ \text{ha asintoto obliquo }y=mx+q\iff\lim_{x\to+\infty}\frac{f(x)}x=m\ne0\ \ \text{e}\ \ \lim_{x\to+\infty}[f(x)-mx]=q\in\mathbb R.$$
**Prop. 1.15.** Se c'è asintoto obliquo, $f$ è un infinito di ordine $1$ rispetto a $x$.

## Formule chiave
$$m=\lim_{x\to\pm\infty}\frac{f(x)}x,\qquad q=\lim_{x\to\pm\infty}[f(x)-mx]$$

## Intuizione
L'asintoto obliquo è la "retta tangente all'infinito": la distanza verticale tra grafico e retta tende a zero. Avere ordine $1$ non basta: $x+\log x=x+o(x)$ ma $f(x)-x=\log x\to+\infty$, quindi niente asintoto (oss. 1.11).

## Come si usa
Nello studio di funzione si calcolano i limiti agli estremi del dominio: limiti infiniti in un punto danno asintoti verticali, limiti finiti all'infinito danno orizzontali, limiti infiniti all'infinito richiedono il test di $f(x)/x$. Esempio di Mazzi (es. 1.27): $y=0$ è asintoto orizzontale destro e sinistro di $1/x$.

## Nei corsi
- **Analisi 1** (triennale): "asintoti". Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/0.Limiti-totale.pdf` (§1.14, def. 1.21, prop. 1.15-1.16, oss. 1.11, es. 1.27, pp. 45-48); `triennale/ANNO 1/analisi 1/Lezioni 2021-22 (manoscritte)/Lezione 2021-11-08.pdf` (p. 1, asintoti verticali destri e sinistri).

## Prerequisiti
- [[Simboli di Landau]]: f=mx+q+o(1)
- [[Ordine di infinitesimo e parte principale]]: obliquo implica ordine 1
- [[Limite di funzione]]: asintoti verticali da limiti infiniti

## Porta a
- [[Studio di funzione]]: comportamento agli estremi

## Collegati
- Nessuno.
