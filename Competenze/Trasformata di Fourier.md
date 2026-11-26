---
tipo: competenza
area: analisi
corsi: [Metodi matematici e probabilità]
livello: [triennale]
aliases: ["Fourier transform", "trasformata di Fourier di funzioni sommabili", "F(g)", "g cappuccio", "lemma di Riemann-Lebesgue", "Riemann-Lebesgue lemma"]
tags: [competenza, area/analisi]
---

# Trasformata di Fourier

> La trasformata $\hat g(\nu)=\int g(t)e^{-2\pi i\nu t}dt$ scompone un segnale non periodico nelle sue frequenze $\nu$; per $g$ sommabile è continua, limitata e trasforma traslazioni in fasi e riscalamenti in riscalamenti inversi.

## Definizione / enunciato
**Definizione 5.1.** Per $g:\mathbb R\to\mathbb C$ sommabile:
$$\mathcal F(g)(\nu)=\hat g(\nu)=\int_{-\infty}^{+\infty}g(t)e^{-2\pi i\nu t}\,dt,\qquad\nu\in\mathbb R\quad(5.9).$$
**Proposizione 5.9.** $\hat g\in C(\mathbb R)$ e $\|\hat g\|_\infty\le\|g\|_1=\int|g|$. Inoltre (lemma di Riemann-Lebesgue, senza dimostrazione) $\hat g(\nu)\to0$ per $|\nu|\to\infty$.

## Formule chiave
Proposizione 5.2 ($a\ne0$):
- $\mathcal F(e^{2\pi i\nu_0t}g)(\nu)=\hat g(\nu-\nu_0)$; $\ \mathcal F(g(t-t_0))(\nu)=e^{-2\pi it_0\nu}\hat g(\nu)$;
- $\mathcal F(g(at))(\nu)=\frac1{|a|}\hat g\big(\frac\nu a\big)$; $\ \mathcal F(\overline{g})(\nu)=\overline{\hat g(-\nu)}$.
- Prop. 5.3: $g$ pari $\Rightarrow\hat g(\nu)=\int g\cos(2\pi\nu t)dt$, pari; $g$ dispari $\Rightarrow\hat g=-i\int g\sin(2\pi\nu t)dt$, dispari.

Trasformate notevoli ($a>0$), Esempi 5.4-5.8 e formulario:
$$\mathcal F(H(t)e^{-at})=\frac1{a+2\pi i\nu},\quad \mathcal F(e^{-a|t|})=\frac{2a}{a^2+4\pi^2\nu^2},\quad \mathcal F(p_a)=\frac{\sin(a\pi\nu)}{\pi\nu},\quad \mathcal F(e^{-at^2})=\sqrt{\frac\pi a}\,e^{-\pi^2\nu^2/a}.$$

## Intuizione
$\hat g(\nu)$ misura quanto $g$ "assomiglia" all'oscillazione $e^{2\pi i\nu t}$. Traslare nel tempo cambia solo la fase; comprimere nel tempo allarga lo spettro.

## Come si usa
Si combinano le proprietà con la tavola. Esempio 5.34: $\frac1{t^2+t+1}=\frac1{(t+1/2)^2+3/4}$, quindi traslazione più $\mathcal F\big(\frac1{a^2+t^2}\big)=\frac\pi ae^{-2\pi a|\nu|}$. Con $a=\pi$ la gaussiana $e^{-\pi t^2}$ è invariante: $\mathcal F(e^{-\pi t^2})=e^{-\pi\nu^2}$ (5.17).

## Nei corsi
- **Metodi matematici e probabilità** (triennale): §5.1-5.2 "Trasformata di Fourier: prime proprietà" e §5.6. La continuità di $\hat g$ è dimostrata con il teorema di convergenza dominata (appendice §5.10). Fonti: `triennale/ANNO 2/metodi matematici & probabilità/Capitolo 5 (3).pdf` (pp. 1-6 del PDF); `formulario_analisi.pdf`; `11 - Trasformata di Fourier di Funzioni (2).pdf` (Richiami di teoria).

## Prerequisiti
- [[Teorema di convergenza dominata]]: continuità della trasformata
- [[Integrale improprio]]: funzioni sommabili su $\mathbb R$

## Porta a
- [[Spazio di Schwartz]]: $\mathcal S$ è stabile per $\mathcal F$
- [[Formula di inversione di Fourier]]: antitrasformata

## Collegati
- [[Distribuzione normale]]: la trasformata della gaussiana è gaussiana
- [[Convoluzione]]: $\mathcal F(f*g)=\mathcal F(f)\mathcal F(g)$
- [[Trasformata di Laplace]]: legame tramite la formula di Riemann-Fourier
- [[Serie di Fourier]]: motivazione per i segnali non periodici (§5.1)
- [[Base di onde piane]]: lo sviluppo di uno stato quantistico su onde piane è la trasformata di Fourier (Quantum physics)
- [[Trasformazione unitaria]]: il passaggio tra base delle posizioni e degli impulsi (Quantum physics)
