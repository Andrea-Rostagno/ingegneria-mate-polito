---
tipo: competenza
area: analisi
corsi: [Metodi matematici e probabilità]
livello: [triennale]
aliases: ["Cauchy integral formula", "formula di Cauchy", "formula di Cauchy per le derivate", "proprietà della media", "mean value property", "principio del massimo", "maximum modulus principle"]
tags: [competenza, area/analisi]
---

# Formula integrale di Cauchy

> I valori di una funzione analitica dentro un cammino chiuso sono determinati dai valori sul cammino; derivando sotto il segno si ottiene che le analitiche hanno derivate di ogni ordine.

## Definizione / enunciato
**Teorema 2.30.** Sia $f$ analitica in una regione $R=\Omega\cup\partial\Omega$, con $\Omega$ dominio e $\partial\Omega$ sostegno di un cammino $C$ chiuso, semplice, antiorario. Per ogni $z_0\in\Omega$:
$$f(z_0)=\frac1{2\pi i}\oint_C\frac{f(z)}{z-z_0}\,dz\quad(2.19).$$
**Teorema 2.32.** Se $f$ è analitica in $z_0$, esistono le derivate di ogni ordine in $z_0$ e
$$f^{(n)}(z_0)=\frac{n!}{2\pi i}\oint_C\frac{f(z)}{(z-z_0)^{n+1}}\,dz,\qquad n\ge1\quad(2.20).$$

## Formule chiave
- **Proprietà della media** (Teorema 2.35): $f(z_0)=\dfrac1{2\pi}\displaystyle\int_0^{2\pi}f(z_0+re^{it})\,dt$ se $B_r(z_0)\subset D$.
- **Principio del massimo** (Teorema 2.36): se $f$ è analitica e non costante in un dominio $\Omega$ e continua su $\Omega\cup\partial\Omega$, $|f|$ raggiunge il massimo su $\partial\Omega$.

## Intuizione
Si deforma $C$ in una piccola circonferenza attorno a $z_0$ (Cauchy-Goursat su dominio con bordo); lì $\frac{f(z)-f(z_0)}{z-z_0}$ dà contributo che tende a zero e resta $f(z_0)\oint\frac{dz}{z-z_0}=2\pi i f(z_0)$.

## Come si usa
Esempio 2.31: $\oint_{|z|=2}\frac{z}{(9-z^2)(z+i)}\,dz$. $f(z)=\frac{z}{9-z^2}$ è analitica per $|z|\le2$ (poli in $\pm3$), quindi l'integrale vale $2\pi i\,f(-i)=2\pi i\cdot\frac{-i}{10}=\frac{\pi}{5}$ (calcolo dal testo). Con $f\equiv1$ la (2.20) ridà $\oint\frac{dz}{(z-z_0)^{n+1}}=0$ per $n\ge1$.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): §2.7 "Formula integrale di Cauchy" e §2.8 "Risultati globali". Fonte: `triennale/ANNO 2/metodi matematici & probabilità/Capitolo 2 (1).pdf` (pp. 21-24 del PDF).

## Prerequisiti
- [[Teorema di Cauchy-Goursat]]: deformazione del cammino attorno a $z_0$
- [[Integrale di linea complesso]]: integrale $\oint (z-z_0)^{-1}dz=2\pi i$

## Porta a
- [[Teorema di Liouville]]: stima di $f'$ dalla (2.20)
- [[Serie di Taylor]]: coefficienti $c_n=f^{(n)}(z_0)/n!$ come integrali
- [[Serie di Laurent]]: coefficienti come integrali su circonferenze

## Collegati
- [[Funzione armonica]]: media e massimo valgono anche per le armoniche
