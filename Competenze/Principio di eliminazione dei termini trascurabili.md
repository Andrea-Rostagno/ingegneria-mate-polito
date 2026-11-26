---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["principle of neglecting negligible terms", "sostituzione di infinitesimi equivalenti", "principio di sostituzione degli infiniti"]
tags: [competenza, area/analisi]
---

# Principio di eliminazione dei termini trascurabili

> In un prodotto o in un quoziente si può sostituire ogni fattore con una funzione equivalente, cioè buttare via gli o piccoli; nelle somme invece no.

## Definizione / enunciato
**Teorema 1.18** (Mazzi). Siano $f,f_1,g,g_1$ definite (con i reciproci) su $A$ e $\bar x$ di accumulazione per $A$. Se per $x\to\bar x$
$$f_1=f+o(f)\quad(\text{cioè }f_1\sim f),\qquad g_1=g+o(g)\quad(\text{cioè }g_1\sim g),$$
allora
$$\lim_{x\to\bar x}f(x)g(x)=\lim_{x\to\bar x}f_1(x)g_1(x),\qquad \lim_{x\to\bar x}\frac{f(x)}{g(x)}=\lim_{x\to\bar x}\frac{f_1(x)}{g_1(x)}.$$
Per gli infiniti Morandotti lo enuncia come "principio di sostituzione degli infiniti" (teor. 3.4.7).

## Formule chiave
$$\lim\frac{f+o(f)}{g+o(g)}=\lim\frac{f\,[1+o(f)/f]}{g\,[1+o(g)/g]}=\lim\frac fg$$

## Intuizione
In un rapporto contano solo i termini dominanti di numeratore e denominatore. In una somma, invece, i termini dominanti possono cancellarsi e allora contano proprio quelli trascurati.

## Come si usa
Esempi di Mazzi (es. 1.21): $\lim_{x\to0}\frac{\sin x}{3\log(1+x)}=\frac13$; $\lim_{x\to0}\frac{1-\cos x}{\tan^2x}=\frac12$; $\lim_{x\to+\infty}\frac{x^4+e^{-x}}{x^3+\sin x}=+\infty$. **Controesempio sulle somme** (es. 1.22): $x+\sin x\sim x$ e $-x+1\sim-x$ per $x\to+\infty$, ma $(x+\sin x)+(-x+1)=\sin x+1$ non ha limite mentre $x+(-x)=0$. Tenendo gli o piccolo l'errore non si commette: $x+o(x)-x+o(x)=o(x)$.

## Nei corsi
- **Analisi 1** (triennale): "principio di eliminazione dei termini trascurabili". Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/0.Limiti-totale.pdf` (teor. 1.18, es. 1.21-1.22, pp. 39-40); `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (teor. 3.4.7, PDF p. 108).

## Prerequisiti
- [[Simboli di Landau]]: f1=f+o(f)

## Porta a
- Nessuno.

## Collegati
- [[Limiti notevoli]]: forniscono le equivalenze da sostituire
